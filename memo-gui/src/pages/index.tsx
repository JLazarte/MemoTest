import { Inter } from 'next/font/google'
import { Flex } from '@layout/flex/Flex'
import { Texture } from '@atom/texture/Texture'
import { Page } from '@atom/page/Page'
import { GameOption } from '@/components/molecules/gameoption/GameOption'
import GameTestService from '@/service/game/test/GameTest.service'

const inter = Inter({ subsets: ['latin'] })

export default function Home({ games }: { games: Array<{ id: number, name: string }> }) {

  return (
    <Page title='Home' inter={inter}>
      <Texture type='upholstery' style={{ height: '100%' }}>
        <Flex direction='column' style={{ flexWrap: 'nowrap', overflow: 'scroll' }}>
          { games.map((option: { id: number, name: string }) => 
            <GameOption  
              name={option.name}
              link={`/game/${option.id}`}
              played={false}
              score={0}
              style={{ width: '320px' }}
            />
          )}
        </Flex>
      </Texture>
    </Page>
  )
}



export async function getStaticProps(context: any) {
  return {
    props: {
      games: await (new GameTestService(true).getTests())
    }
  }
}

