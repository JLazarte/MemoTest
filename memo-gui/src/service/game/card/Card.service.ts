import seedrandom from 'seedrandom'

import { CardContent } from "@/components/atoms/card/Card.props";
import request, { gql } from "graphql-request";

export default class CardService {
    private GQL_HOST: string;

    constructor(ssr: boolean){
        this.GQL_HOST = ssr ? 'http:127.0.0.1:8000' : '';
    }

    private drawCard = (name: string) => ({
        label: name,
        backImage: '/cards/bg_dark.png',
        frontImage: `/cards/steampunk-ma${name}.jpg`
    })

    public async retrieveCards(gameTestId: number): Promise<Array<CardContent>> {
        const memoTest = (await request<any>(
            `${this.GQL_HOST}/graphql`,
            gql`{
                memoTest(id: ${gameTestId}){
                    id,
                    name,
                    images {
                    name
                    }
                }
            }`
        ))?.memoTest
        
        const randonGenerator = seedrandom(memoTest?.name)

        return memoTest
            ?.images
            ?.map(({ name }: { name: string}) => name)
            ?.map((name: string) => [ name, name ])
            ?.flat()
            ?.sort((_: string) => randonGenerator() - 0.5)
            ?.map((name: string) => this.drawCard(name));
    }
}

