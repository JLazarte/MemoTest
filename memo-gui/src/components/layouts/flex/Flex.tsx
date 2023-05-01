import React, { PropsWithChildren, ReactElement } from 'react';
import styles from './Flex.module.css';
import { FlexProps } from './Flex.props';

export const Flex = ({
  gap = 10,
  direction = 'row',
  maxColumns = 3,
  maxRows = 5,
  style,
  ...props
}: FlexProps & PropsWithChildren) => {

  const flexDirection =
      direction === 'column' ||
      direction === 'offset-grid' ?
      'column' :
      'row';

  const offsetGenerator = () => {
    const counter = { act: maxRows, offset: true };
    
    return () => {
      counter.act = counter.act - 1;

      if (counter.act == 0) {
        counter.act = maxRows - (counter.offset ? 0 : 1);
        counter.offset = !counter.offset;
      }

      return counter.offset ? 1 : 0;
    }
  }

  const retriveOffset = offsetGenerator();

  return (
    <div 
      className={styles['flex-container']}
      style={{
        gap,
        flexDirection,
        ...style
      }}
    >
      {
        (Array.isArray(props.children)? props.children as Array<ReactElement> : [props.children] )
          .map((el, idx) =>
            <div
              key={idx}
              className={styles['flex-item']}
              style={{
                flex: direction === 'grid' ? '' : '1',
                flexBasis:
                  ['grid', 'flex-grid'].some(el => el == direction) ?
                  `calc(calc(100% / ${maxColumns}) - ${gap}px)` :
                  ['offset-grid'].some(el => el == direction) ?
                  `calc(calc(100% / ${maxRows - (retriveOffset())}) - ${gap}px)` :
                  'unset'
              }}
            >
              {el}
            </div>
          )
      }
    </div>
  );
};
