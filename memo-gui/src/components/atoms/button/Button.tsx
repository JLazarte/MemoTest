import React from 'react';
import styles from './Button.module.css';
import classnames from 'classnames'
import { ButtonProps } from './Button.props';

export const Button = ({
  primary = false,
  size = 'medium',
  backgroundColor,
  label,
  ...props
}: ButtonProps) => {
  const mode = primary ? 'button--primary' : 'button--secondary';
  return (
    <button
      type="button"
      className={
        classnames(
          styles['button'],
          styles[`button--${size}`],
          styles[mode]
        )
      }
      style={{
        backgroundColor: backgroundColor
      }}
      {...props}
    >
      {label}
    </button>
  );
};
