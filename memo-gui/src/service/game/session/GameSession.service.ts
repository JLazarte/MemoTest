import request, { gql } from "graphql-request";

export default class GameSessionService {
    private GQL_HOST: string;

    constructor(ssr: boolean){
        this.GQL_HOST = ssr ? 'http:127.0.0.1:8000' : '';
    }
    
    public async getAllSessions(): Promise<Array<any>> {
        const query = gql`
            {
                gameSessions {
                    id,
                    number_of_pairs,
                    memo_test_id,
                    retries
                }
            }
        `;

        return (await request<any>(`${this.GQL_HOST}/graphql`, query))
            ?.gameSessions;
    }

    public async getSession(gameSessionId: number): Promise<any> {
        const query = gql`
            {
                gameSession(id: ${gameSessionId}) {
                    id,
                    state,
                    retries,
                    memo_test_id,
                    number_of_pairs,
                    memo_test {
                        id, 
                        name,
                        images {
                            name
                        }
                    }
                }
            }
        `;

        return (await request<any>(`${this.GQL_HOST}/graphql`, query))
            ?.gameSession;
    }

    public async getHighScoreOfSessions(): Promise<any> {
        const query = gql`
            {
                gameSessions {
                    id,
                    memo_test_id,
                    number_of_pairs,
                    retries,
                    state
                }
            }
        `;

        const result = (await request<any>(`${this.GQL_HOST}/graphql`, query));

        console.log(result);

        return result
            ?.gameSessions
            ?.filter((el: any) => el.state === "COMPLETED")
            ?.reduce((acc: any, act: any) => {
                const savedScore = (acc[act.memo_test_id] || 0);
                const score = Math.floor((act.number_of_pairs / act.retries) * 100);
                acc[act.memo_test_id] = savedScore > score ? savedScore : score;
                return acc;
            }, {})
    }

    public async createSession(gameTestId: number, numberOfPairs: number): Promise<{ id: number }> {
        const query = gql`
            mutation {
                createGameSession(
                    memo_test_id: ${gameTestId}
                    number_of_pairs: ${numberOfPairs}
                    retries: 0
                    state: STARTED
                ){
                    id,
                    state,
                    memo_test_id,
                    number_of_pairs,
                    memo_test{
                        name,
                        images{
                            name
                        }
                    }
                }
            }
        `;

        return (await request<any>(`${this.GQL_HOST}/graphql`, query)).createGameSession;
    }

    public async updateSession(gameSessionId: number, retries: number): Promise<{ id: number }> {
        const query = gql`
            mutation {
                updateGameSession(
                    id: ${gameSessionId}
                    retries: ${retries}
                ){
                    id
                }
            }
        `;

        return (await request<any>(`${this.GQL_HOST}/graphql`, query)).updateGameSession
    }

    public async closeSession(gameSessionId: number): Promise<{ id: number }> {
        const query = gql`
            mutation {
                endGameSession(id: ${gameSessionId}) {
                    id,
                    state
                }
            }
        `;

        return (await request<any>(`${this.GQL_HOST}/graphql`, query)).endGameSession
    }
    
}