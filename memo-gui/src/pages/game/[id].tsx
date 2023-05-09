import React, { useEffect, useMemo, useState } from 'react'

import { MemoGame } from '@organism/memogame/MemoGame'
import { GameBoard } from '@organism/gameboard/GameBoard'
import { CardClickEvent, CardContent } from '@atom/card/Card.props'

import GamePlayService from '@/service/game/play/GamePlay.service'
import CardService from '@/service/game/card/Card.service'
import GameSessionService from '@/service/game/session/GameSession.service'
import SessionStorageService from '@/service/game/session/SessionStorage.service'

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
    },
    matches: Array<string>
  },
  cards: Array<CardContent>
}) {
  const [loading, setLoading] = useState(true); 
  const [gameService, setGameService] = useState<any>(); 
  const [score, setScore] = useState(0); 
  const gameSessionService = useMemo(() => new GameSessionService(), []);
  const storageService = useMemo(() => new SessionStorageService(), []);

  const { id: sessionId, retries, memo_test } = gameSession;

  useEffect(() =>{
    console.log(gameSession);

    cards.forEach(card => {
      card.state = (gameSession?.matches || []).some((match: string) => match == card.label) ? 'matched' : card.state
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
    <GameBoard score={score}>
        { !loading && <MemoGame
          cards={cards}
          onCardSelected={(event: CardClickEvent) => gameService.onCardSelected(event)}
        />}
    </GameBoard>
  )
}

export async function getServerSideProps(context: any) {
  const gameSessionId = parseInt(context.params.id);

  const prefix = 'GAME_SAVE_FOR_TEST_'

  const parseCookie = (value: any) => {
    if (value) {
      try {
        return JSON.parse(value);

      } catch { }
    }

    return value;
  }

  const gamesSaved = Object.fromEntries(
    Object.entries(context.req.cookies)
      .filter(([key, _]) => key.startsWith(prefix))
      .map(([key, value]) => [ key.slice(prefix.length), parseCookie(value) ])
  );

  const savedSession = await new GameSessionService(process.env.MEMO_SERVICE).getSession(gameSessionId);

  console.log('savedSession', savedSession)

  const gameSession = {
    ...(savedSession),
    matches: gamesSaved[savedSession.memo_test.id]?.matches || []
  }

  console.log('gameSession', gameSession)

  return {
    props: {
      gameSession,
      cards: (new CardService()).calculateCards(gameSession.memo_test.name, gameSession.memo_test.images)
    }
  }
}