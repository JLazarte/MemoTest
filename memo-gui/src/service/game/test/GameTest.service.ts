import request, { gql } from "graphql-request";

export default class GameTestService {
    private GQL_HOST: string;

    constructor(ssr: boolean){
        this.GQL_HOST = ssr ? 'http:127.0.0.1:8000' : '';
    }
    
    public async getTests(): Promise<Array<any>> {
        const query = gql`
            {
                memoTests{
                    id,
                    name,
                    images {
                        name
                    }
                }
            }
        `;

        return (await request<any>(`${this.GQL_HOST}/graphql`, query))?.memoTests;
    }
}