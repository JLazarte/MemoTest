import classnames from 'classnames';
import React, { PropsWithChildren, ReactElement } from 'react';
import styles from './Texture.module.css';
import { TextureProps } from './Texture.props';

export const Texture = ({
  type = 'carbon',
  ...props
}: TextureProps & PropsWithChildren) => {

  return (
    <div
      style={props.style}
      className={classnames(
        styles['texture'],
        styles[type]
      )}
    >
      {props.children}
    </div>
  );
};
