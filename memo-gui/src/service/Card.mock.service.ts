import { CardContent } from "@/components/atoms/card/Card.props";

export default class CardMockService {

    constructor(
        private cardsPairsAmount: number
    ){}

    public async retrieveCards(): Promise<Array<CardContent>> {
        const drawCard = (name: string) => ({
            label: name,
            backImage: '/cards/bg_dark.png',
            frontImage: `/cards/steampunk-ma${name}.jpg`
        })
        const zeroPad = (num: number, places: number) => String(num).padStart(places, '0')

        const cards = Array(this.cardsPairsAmount)
            .fill(0)
            .map((_, idx) => [
                drawCard(zeroPad(idx, 2)),
                drawCard(zeroPad(idx, 2))
            ]).flat()
            .sort(() => Math.random() - 0.5);;

        return Promise.resolve(cards);
    }
}

export const getServerSideProps = () => {}