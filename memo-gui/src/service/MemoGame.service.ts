import { CardClickEvent, CardContent } from "@/components/atoms/card/Card.props";
import CardMockService from "./Card.mock.service";
import ScoreService from "./Score.service";


export default class MemoGameService {
    private cards: Array<CardContent> = [];
    private cardsSelected: Array<CardClickEvent> = [];
    private matches: number = 0;
    private tries: number = 0;

    constructor(
        private pairs: number,
        private onGameWin: (score: number) => void,
        private cardService: CardMockService,
        private scoreService: ScoreService,
    ){}

    

    public async retrieveCards(): Promise<Array<CardContent>> {

        this.cards = await this.cardService.retrieveCards();
        this.matches = 0;
        this.tries = 0;

        return this.cards;
    }

    public onCardSelected(event: CardClickEvent): void {
        console.log(event)

        if (event.state !== 'hide') {
            return;
        }

        event.setState('revealed');

        this.cardsSelected.push(event);

        if (this.cardsSelected.length > 1) {
            this.tries += 1;

            const firstCardLabel = this.cardsSelected[0].card.label;
            const hasMatch = this.cardsSelected.every(event => event.card.label == firstCardLabel);

            const copy = [ ...this.cardsSelected ]
            this.cardsSelected = [];

            setTimeout(() => {
                console.log(copy, hasMatch ? 'matched' : 'hide' )
                copy.forEach(event => event.setState(hasMatch ? 'matched' : 'hide'))

                if (hasMatch) {
                    this.matches += 1;
                }

                if (this.matches == this.pairs) {
                    const score = (this.pairs / this.tries) * 100;
                    this.scoreService.saveScore(score);
                    this.onGameWin(score);
                }

            }, 1000);
        }
    }
}