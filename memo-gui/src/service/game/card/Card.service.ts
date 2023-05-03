import seedrandom from 'seedrandom'

import { CardContent } from "@/components/atoms/card/Card.props";

export default class CardService {

    private drawCard = (name: string): CardContent => ({
        state: 'hide',
        label: name,
        backImage: '/cards/bg_dark.png',
        frontImage: `/cards/steampunk-ma${name}.jpg`
    })

    public calculateCards(memoTestName: string, images: Array<{ name: string}>): Array<CardContent> {
        const randonGenerator = seedrandom(memoTestName)

        return images
            .map(({ name }: { name: string}) => name)
            .map((name: string) => [ name, name ])
            .flat()
            .sort((_: string) => randonGenerator() - 0.5)
            .map((name: string) => this.drawCard(name));
    }
}

