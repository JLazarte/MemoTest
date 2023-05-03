import { CardClickEvent, CardContent } from "@/components/atoms/card/Card.props";
import GameSessionService from "../session/GameSession.service";


export default class MemoGameService {
    private cardsSelected: Array<CardClickEvent> = [];
    private matches: number;
    private tries: number;
    private pairs: number;

    constructor(
        private gameSessionService: GameSessionService,
        private cards: Array<CardContent>,
        private onGameWin: (score: number) => void,
    ){
        this.pairs = this.cards.length / 2;
        this.matches = 0;
        this.tries = 0;
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
                    // this.gameSessionService.save();
                    this.onGameWin(score);
                }

            }, 1000);
        }
    }
}