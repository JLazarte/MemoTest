import React, { useEffect, useMemo, useState } from 'react'
import { Inter } from 'next/font/google'

import { MemoGame } from '@organism/memogame/MemoGame'
import { GameBoard } from '@organism/gameboard/GameBoard'
import { Flex } from '@layout/flex/Flex'
import { CardClickEvent, CardContent } from '@atom/card/Card.props'
import { Texture } from '@atom/texture/Texture'
import { Button } from '@atom/button/Button'
import { Page } from '@atom/page/Page'

import MemoGameService from '@/service/MemoGame.service'
import CardMockService from '@/service/Card.mock.service'
import ScoreService from '@/service/Score.service'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const [score, setScore] = useState(0); 
  const [cards, setCards] = useState<CardContent[]>([]); 
  const cardsPairsAmount = 15;

  const gameService = useMemo(() => 
    new MemoGameService(
      cardsPairsAmount,
      (score: number) => setScore(score),
      new CardMockService(cardsPairsAmount),
      new ScoreService()
    ), []
  );

  useEffect(() => {
      (async () => {
        setCards(await gameService.retrieveCards())
      })();
    }, []
  );

  return (
    <Page title='Game' inter={inter}>
      <div style={{
        display: 'flex',
        flexDirection: 'row',
        height: '100%'
      }}>
        <GameBoard score={score}>
          {cards &&
            <MemoGame
              cards={cards}
              onCardSelected={(event: CardClickEvent) => gameService.onCardSelected(event)}
            />
          }
        </GameBoard>
        <Texture type='leather' style={{ width: '320px' }} >
          <Flex direction='column' style={{ height: '200px' }}>
            <Link href={'/'}>
              <Button
                label='Go home'
                primary={true}
              />
            </Link>
          </Flex>
        </Texture>
      </div>
    </Page>
  )
}
