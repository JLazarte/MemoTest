import React from 'react';
import styles from './Loading.module.css';
import { LoadingProps } from './Loading.props';

export const Loading = ({
  style,
  ...props
}: LoadingProps) => {

  return (
    <div className={styles["loading-container"]} style={{ ...style }}>
      <div className={styles["lds-ellipsis"]}><div></div><div></div><div></div><div></div></div>
    </div>
  );
};
