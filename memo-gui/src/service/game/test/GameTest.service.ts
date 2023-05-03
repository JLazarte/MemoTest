import request, { gql } from "graphql-request";

type GameSession = {
    gameSessionId: number
    retries: number
    numberOfPairs: number
    cardsFounded: Array<string>
} 


export default class GameSessionService {
    private GQL_HOST: string;

    constructor(ssr: boolean){
        this.GQL_HOST = ssr ? 'http:127.0.0.1:8000' : '';
    }
    
    public async getTests(): Promise<Array<any>> {
        const query = gql`
            {
                memoTests{
                    id,
                    name
                }
            }
        `;

        return (await request<any>(`${this.GQL_HOST}/graphql`, query))?.memoTests;
    }
}