import request, { gql } from "graphql-request";

export default class GameTestService {
    private GQL_HOST: string;

    constructor(ssr: boolean){
        this.GQL_HOST = ssr ? 'http://host.docker.internal.:8000' : '';
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