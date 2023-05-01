import { CardContent } from "@/components/atoms/card/Card.props";
import request, { gql } from "graphql-request";

export default class CardService {

    constructor(){}

    public async retrieveCards(): Promise<Array<CardContent>> {
        const query = gql`
            {
                memoTest(id: 3){
                    name,
                    images {
                    name
                    }
                }
            }
        `;

        (await request<any>('http://127.0.0.1:8000/graphql', query))
            ?.data
            ?.memoTest
            ?.images
            ?.map((img: { name: string}) => {
                console.log(img.name);
                const drawCard = (name: string) => ({
                    label: name,
                    backImage: '/cards/bg_dark.png',
                    frontImage: `/cards/steampunk-ma${name}.jpg`
                })
            })

        return Promise.resolve([]);
    }
}