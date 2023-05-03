import { Fireworks } from '@atom/fireworks/Fireworks';
import React, { PropsWithChildren  } from 'react';
import Link from 'next/link';
import styles from './GameBoard.module.css';
import { GameBoardProps } from './GameBoard.props';
import { Button } from '@atom/button/Button';

export const GameBoard = ({
  score,
  ...props
}: GameBoardProps & PropsWithChildren) => {

  return (
    <div className={styles['game-board']}>
      {props.children}
      {(score || 0) > 0 && <>
        <Fireworks />
        <div className={styles['game-board-score']}>
          <h1>Win</h1>
          <p>score: {score}</p>
          <Link href={'/'}>
            <Button
              label='Go Home'
              primary={true}
            />
          </Link>
        </div>
      </> }
    </div>
  );
};
