export interface CardContent {
  /**
   * Hide: This game card is hidding the content face
   * Revealed: This game card is showing the content face
   * Matched: this game card had been already played and has a match
   */
  state?: CardState;
  /**
   * game card contents - should be a bit sensitive
   */
  label: string;
  /**
   *  content image reveled  - should be a bit sensitive
   */
  frontImage: string;
  /**
   *  back image used to hide front image
   */
  backImage: string;
}

export type CardState = 'hide' | 'revealed' | 'highlighted' | 'matched';

export interface CardClickEvent {
  /**
   * game card contents - should be a bit sensitive
   */
  card: CardContent;
  /**
   *  content image reveled  - should be a bit sensitive
   */
  state: CardState;
  /**
   *  back image used to hide front image
   */
  setState: (newState: CardState) => void;
}

export interface CardProps extends CardContent {
  /**
   * How large the game card should be?
   */
  size?: 'small' | 'medium' | 'large';
  /**
   * Optional click handler
   */
  onClick?: (event: CardClickEvent) => void;
}