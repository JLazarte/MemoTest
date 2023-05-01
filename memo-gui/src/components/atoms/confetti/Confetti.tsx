import React from 'react';
import styles from './Confetti.module.css';
import { ConfettiProps } from './Confetti.props';

export const Confetti = ({
  style,
  ...props
}: ConfettiProps) => {

  return (
    <div className={styles["pyro"]}>
      <div className={styles["before"]}></div>
      <div className={styles["after"]}></div>
    </div>
  );
};
