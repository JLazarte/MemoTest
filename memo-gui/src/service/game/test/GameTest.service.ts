import request, { gql } from "graphql-request";

export default class GameTestService {
    

    constructor(private GQL_HOST: string = ''){
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