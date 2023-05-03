import React from 'react';
import styles from './GameOption.module.css';
import { GameOptionProps } from './GameOption.props';

import { Section } from '@atom/section/Section';
import { Texture } from '@atom/texture/Texture';
import { Button } from '@atom/button/Button';
import { Flex } from '@layout/flex/Flex';
import Link from 'next/link';

export const GameOption = ({
  name,
  played,
  score,
  link,
  style,
  ...props
}: GameOptionProps) => {

  return (
    <div className={styles['game-option']} style={style}>
      <Section style={{
        padding: '0'
      }}>
        <Texture type='leather' style={{ padding: '15px', textAlign: 'center' }}>
          <p><label>Name: </label>{name}</p>
          <br/>
          <hr/>
          <br/>
          <Flex direction='grid' maxColumns={2}>
            { score ? <p><label>Score: </label>{score}</p> : 'Without record'}
            <Link href={link}>
              <Button
                label={played ? 'Continue' : 'Play'}
                primary={true}
              />
            </Link>
          </Flex>
        </Texture>
      </Section>
    </div>
  );
};
