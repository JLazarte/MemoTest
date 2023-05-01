import { Fireworks } from '@atom/fireworks/Fireworks';
import React, { PropsWithChildren  } from 'react';
import styles from './GameBoard.module.css';
import { GameBoardProps } from './GameBoard.props';

export const GameBoard = ({
  score,
  ...props
}: GameBoardProps & PropsWithChildren) => {

  return (
    <div className={styles['game-board']}>
      {props.children}
      {(score || 0) > 0 && <div className={styles['game-board-score']}>
        <Fireworks />
        <h1>Win</h1>
        <p>score: {score}</p>
      </div> }
    </div>
  );
};
