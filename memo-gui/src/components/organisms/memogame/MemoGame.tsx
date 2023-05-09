import React, { PropsWithChildren, ReactElement } from 'react';
import { MemoGameProps } from './MemoGame.props';

import { Flex } from '@layout/flex/Flex';
import { Card } from '@atom/card/Card';
import { Texture } from '@atom/texture/Texture';
import { CardClickEvent } from '@atom/card/Card.props';


export const MemoGame = ({
  cards,
  onCardSelected,
  ...props
}: MemoGameProps & PropsWithChildren) => {

  return (
    <Flex direction='offset-grid' maxRows={5}>
      {cards.map((card => <Card
        key={[card.label, card.state].join('#')}
        {...card}
        onClick={(event: CardClickEvent) => onCardSelected?.(event)}
      />))}
    </Flex>
  );
};
