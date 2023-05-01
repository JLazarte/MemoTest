import classnames from 'classnames';
import React, { PropsWithChildren } from 'react';
import styles from './Section.module.css';
import { SectionProps } from './Section.props';

export const Section = ({
  style,
  ...props
}: SectionProps & PropsWithChildren) => {
  return (
    <div className={classnames(styles['section'])} style={style}>
      {props.children}
    </div>
  );
};
