import { Inter } from 'next/font/google'
import { Flex } from '@layout/flex/Flex'
import { Texture } from '@atom/texture/Texture'
import { Page } from '@atom/page/Page'
import { GameOption } from '@/components/molecules/gameoption/GameOption'
import GameTestService from '@/service/game/test/GameTest.service'
import GameSessionService from '@/service/game/session/GameSession.service'
import { useEffect, useMemo, useState } from 'react'
import StorageService from '@/service/Storage.service'
import { useRouter } from 'next/router'

const inter = Inter({ subsets: ['latin'] })

type MemoTest = { id: number, name: string, images: Array<{ name: string}> };

export default function Home({
  games,
  scores
}: {
  games: Array<MemoTest>,
  scores: { [ memo_test_id: number ]: number }
}) {
  const [loading, setLoading] = useState(true);

  const router = useRouter();

  const gameSessionService = useMemo(() => new GameSessionService(false), []);
  const storageService = useMemo(() => new StorageService(), []);

  const createSession = async (memoTestId: number, numberOfPairs: number) => {
    const session: any = await gameSessionService.createSession(memoTestId, numberOfPairs)

    storageService.save(`GAME_SAVE_FOR_TEST_${memoTestId}`, session);

    return session;
  }

  const hasSessionSaved = (memoTestId: number) => storageService.get(`GAME_SAVE_FOR_TEST_${memoTestId}`) != null;

  const onOptionClicked = async (memoTestId: number, numberOfPairs: number) => {
    const session: any = storageService.get(`GAME_SAVE_FOR_TEST_${memoTestId}`);

    const sessionId = session != null ?
      session.id :
      (await createSession(memoTestId, numberOfPairs)).id

    router.push(`/game/${sessionId}`);
  }

  useEffect(() => setLoading(false), [])

  return (
    <Page title='Home' inter={inter}>
      <Texture type='upholstery' style={{ height: '100%' }}>
        <Flex direction='column' style={{ flexWrap: 'nowrap', overflow: 'scroll' }}>
          { games.map(({ id, name, images }: MemoTest) => 
            <GameOption
              id={id}  
              name={name}
              played={loading ? false : hasSessionSaved(id)}
              score={scores[id]}
              style={{ width: '320px' }}
              onClick={async (id: number) => onOptionClicked(id, images.length)}
            />
          )}
        </Flex>
      </Texture>
    </Page>
  )
}



export async function getServerSideProps(context: any) {
  return {
    props: {
      games: await (new GameTestService(true).getTests()),
      scores: await (new GameSessionService(true).getHighScoreOfSessions())
    }
  }
}

