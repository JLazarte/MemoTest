import { CardClickEvent, CardContent } from "@atom/card/Card.props";

export interface MemoGameProps {
  cards: Array<CardContent>
  onCardSelected?: (card: CardClickEvent) => void
}