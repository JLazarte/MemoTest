import React, { useEffect, useMemo, useState } from 'react'
import { useRouter } from 'next/router'
import { Inter } from 'next/font/google'

import { MemoGame } from '@organism/memogame/MemoGame'
import { GameBoard } from '@organism/gameboard/GameBoard'
import { CardClickEvent, CardContent } from '@atom/card/Card.props'
import { Page } from '@atom/page/Page'

import GamePlayService from '@/service/game/play/GamePlay.service'
import CardService from '@/service/game/card/Card.service'
import GameSessionService from '@/service/game/session/GameSession.service'

const inter = Inter({ subsets: ['latin'] })

export default function MemoGamePage({ cards }: { cards: Array<CardContent> }) {
  const [score, setScore] = useState(0); 


  const gameService = useMemo(() => 
    new GamePlayService(
      new GameSessionService(),
      cards,
      (score: number) => setScore(score),
    ), []
  );

  return (
    <Page title='Game' inter={inter}>
      <GameBoard score={score}>
          <MemoGame
            cards={cards}
            onCardSelected={(event: CardClickEvent) => gameService.onCardSelected(event)}
          />
        </GameBoard>
    </Page>
  )
}

export async function getStaticProps(context: any) {
  return {
    props: {
      cards: await new CardService(true).retrieveCards(parseInt(context.params.id))
    }
  }
}


export async function getStaticPaths() {
  return {
    paths: [
      { params: { id: "1" } },
      { params: { id: "2" } }
    ], fallback: 'blocking' }
}