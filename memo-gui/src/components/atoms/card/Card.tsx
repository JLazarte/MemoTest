import classnames from 'classnames';
import React, { useState } from 'react';
import styles from './Card.module.css';
import { CardProps } from './Card.props';

export const Card = ({
  state = 'hide',
  size = 'medium',
  label,
  frontImage,
  backImage,
  onClick,
  ...props
}: CardProps) => {
  const [ innerState, setInnerState ] = useState(state);
  return (
    <div
      onClick={() => {
        onClick?.({
          card: { label, frontImage, backImage},
          state: innerState,
          setState: setInnerState
        });
      }}
      className={classnames(styles['flip-card'], styles[innerState], styles[size])}
    >
      <div className={styles['flip-card-inner']}>
        <div className={styles['flip-card-back']} style={{ backgroundImage: `url(${backImage})` }}>
          <div className={styles['flip-card-back-content']}>
          </div>
        </div>
        <div className={styles['flip-card-front']} style={{ backgroundImage: `url(${frontImage})` }}>
          <div className={styles['flip-card-front-content']}>
            <h1>{label}</h1>
          </div>
        </div>
      </div>
    </div>
  );
};
