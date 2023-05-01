import React from 'react';
import styles from './Score.module.css';
import { ScoreProps } from './Score.props';

import { Section } from '@atom/section/Section';
import { Texture } from '@atom/texture/Texture';
import { Flex } from '@layout/flex/Flex';

export const Score = ({
  values,
  style,
  ...props
}: ScoreProps) => {
  return (
    <div className={styles['score']} style={style}>       
      <h1 className={styles['score-title']}>Scoreboard</h1>
      <Flex direction='column'>
        {values.map((val, idx) => 
          <div 
            key={idx}
            className={styles['score-result']}
          >
            <Section style={{
              padding: '0'
            }}>
              <Texture type='leather'>
                <div className={styles['score-result-content']}>
                  <Flex direction='grid' maxColumns={2}>
                    <h1>#{idx}:</h1>
                    <h1>{val}</h1>
                  </Flex>
                </div>
              </Texture>
            </Section>
          </div>
        )}
      </Flex>
    </div>
  );
};
