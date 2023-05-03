import React, { useEffect, useMemo, useState } from 'react'
import { Inter } from 'next/font/google'

import { MemoGame } from '@organism/memogame/MemoGame'
import { GameBoard } from '@organism/gameboard/GameBoard'
import { CardClickEvent, CardContent } from '@atom/card/Card.props'
import { Page } from '@atom/page/Page'

import GamePlayService from '@/service/game/play/GamePlay.service'
import CardService from '@/service/game/card/Card.service'
import GameSessionService from '@/service/game/session/GameSession.service'
import StorageService from '@/service/Storage.service'

const inter = Inter({ subsets: ['latin'] })

export default function MemoGamePage({
  gameSession,
  cards
}: {
  gameSession: {
    id: number,
    retries: number,
    memo_test: {
      id: number,
      images: Array<{
        name: string
      }>
    }
  },
  cards: Array<CardContent>
}) {
  const [loading, setLoading] = useState(true); 
  const [gameService, setGameService] = useState<any>(); 
  const [score, setScore] = useState(0); 
  const gameSessionService = useMemo(() => new GameSessionService(false), []);
  const storageService = useMemo(() => new StorageService(), []);

  const { id: sessionId, retries, memo_test } = gameSession;

  useEffect(() =>{
    const sessionSaved: any = storageService.get(`GAME_SAVE_FOR_TEST_${memo_test.id}`)

    console.log(gameSession);

    cards.forEach(card => {
      card.state = (sessionSaved?.matches || []).some((match: string) => match == card.label) ? 'matched' : card.state
    })

    setGameService(
      new GamePlayService(
        memo_test.id,
        retries,
        cards,
        (gameTestId: number, score: number, retries: number, matches: Array<string>) => {
          console.log(retries);
          storageService.save(`GAME_SAVE_FOR_TEST_${gameTestId}`, { ...gameSession, matches })
          gameSessionService.updateSession(sessionId, retries)
        },
        (gameTestId: number, score: number) => {
          setScore(score)
          storageService.remove(`GAME_SAVE_FOR_TEST_${gameTestId}`)
          gameSessionService.closeSession(sessionId)
        },
      )
    );

    setLoading(false)
  }, [])

  return (
    <Page title='Game' inter={inter}>
      <GameBoard score={score}>
          { !loading && <MemoGame
            cards={cards}
            onCardSelected={(event: CardClickEvent) => gameService.onCardSelected(event)}
          />}
        </GameBoard>
    </Page>
  )
}

export async function getStaticProps(context: any) {
  const gameSessionId = parseInt(context.params.id);
  const gameSession = await new GameSessionService(true).getSession(gameSessionId);
  const memoTest = gameSession.memo_test;

  console.log(gameSession)

  return {
    props: {
      gameSession,
      cards: (new CardService()).calculateCards(memoTest.name, memoTest.images)
    }
  }
}


export async function getStaticPaths() {
  return { paths: [], fallback: 'blocking' }
}