import { CardClickEvent, CardContent } from "@/components/atoms/card/Card.props";


export default class MemoGameService {
    private cardsSelected: Array<CardClickEvent> = [];
    private matches: Array<string>;
    private pairs: number;

    constructor(
        private gameTestId: number,
        private retries: number,
        private cards: Array<CardContent>,
        private onPairSelected: (gameTestId: number, score: number, retries: number, matches: Array<string>) => void,
        private onGameWin: (gameTestId: number, score: number) => void,
    ){
        console.log(cards);

        this.pairs = this.cards.length / 2;
        this.matches = this.cards
            .filter(card => card.state == 'matched' )
            .map(card => card.label);
    }

    public onCardSelected(event: CardClickEvent): void {
        if (event.state !== 'hide') {
            return;
        }

        event.setState('revealed');

        this.cardsSelected.push(event);

        if (this.cardsSelected.length > 1) {
            this.retries += 1;

            const firstCardLabel = this.cardsSelected[0].card.label;
            const hasMatch = this.cardsSelected.every(event => event.card.label == firstCardLabel);
            const score = Math.floor((this.pairs / this.retries) * 100);

            const copy = [ ...this.cardsSelected ]
            this.cardsSelected = [];

            if (hasMatch) {
                this.matches.push(firstCardLabel);
            }

            this.onPairSelected(this.gameTestId, score, this.retries, this.matches);

            setTimeout(() => {
                copy.forEach(event => event.setState(hasMatch ? 'matched' : 'hide'))

                console.log(this)

                if (this.matches.length == this.pairs) {
                    this.onGameWin(this.gameTestId, score);
                }

            }, 1000);
        }
    }
}