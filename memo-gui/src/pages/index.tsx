import { Flex } from '@layout/flex/Flex'
import { GameOption } from '@/components/molecules/gameoption/GameOption'
import GameTestService from '@/service/game/test/GameTest.service'
import GameSessionService from '@/service/game/session/GameSession.service'
import { useEffect, useMemo, useState } from 'react'
import SessionStorageService from '@/service/game/session/SessionStorage.service'
import { useRouter } from 'next/router'

type MemoTest = { id: number, name: string, images: Array<{ name: string}> };

export default function Home({
  games,
  scores,
  gamesSaved
}: {
  games: Array<MemoTest>,
  scores: { [ memo_test_id: number ]: number }
  gamesSaved: { [ memo_test_id: number ]: any }
}) {
  const [loading, setLoading] = useState(true);

  const router = useRouter();

  const gameSessionService = useMemo(() => new GameSessionService(), []);
  const storageService = useMemo(() => new SessionStorageService(), []);

  const createSession = async (memoTestId: number, numberOfPairs: number) => {
    const session: any = await gameSessionService.createSession(memoTestId, numberOfPairs)

    storageService.save(`GAME_SAVE_FOR_TEST_${memoTestId}`, session);

    return session;
  }

  const hasSessionSaved = (memoTestId: number) => gamesSaved[memoTestId] != null;

  const onOptionClicked = async (memoTestId: number, numberOfPairs: number) => {
    const session: any = gamesSaved[memoTestId];

    const sessionId = session != null ?
      session.id :
      (await createSession(memoTestId, numberOfPairs)).id

    router.push(`/game/${sessionId}`);
  }

  useEffect(() => setLoading(false), [])

  return (
    <Flex direction='column' style={{ flexWrap: 'nowrap', overflow: 'scroll' }}>
      { games.map(({ id, name, images }: MemoTest) => 
        <GameOption
          id={id}  
          name={name}
          key={id}
          played={loading ? false : hasSessionSaved(id)}
          score={scores[id]}
          style={{ width: '320px' }}
          onClick={async (id: number) => onOptionClicked(id, images.length)}
        />
      )}
    </Flex>
  )
}



export async function getServerSideProps(context: any) {
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

  console.log(gamesSaved);

  return {
    props: {
      games: await (new GameTestService(process.env.MEMO_SERVICE).getTests()),
      scores: await (new GameSessionService(process.env.MEMO_SERVICE).getHighScoreOfSessions()),
      gamesSaved
    }
  }
}

