import { Inter } from 'next/font/google'
import { Flex } from '@layout/flex/Flex'
import { Button } from '@atom/button/Button'
import { Texture } from '@atom/texture/Texture'
import { Score } from '@molecule/score/Score'
import { Page } from '@atom/page/Page'
import { useEffect, useMemo, useState } from 'react'
import ScoreService from '@/service/Score.service'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const [scores, setScores] = useState<Array<number | string>>([]);

  const scoreService = useMemo(() => new ScoreService(), []);

  useEffect(() => {
    setScores(scoreService.getScores())
  }, [])

  return (
    <Page title='Home' inter={inter}>
      <div style={{
        display: 'flex',
        flexDirection: 'row',
        height: '100%'
      }}>
        <Texture type='upholstery' style={{ height: '100%' }}>
          <Score values={scores} style={{ marginTop: '45px' }}/>
        </Texture>
        <Texture type='leather' style={{ width: '320px' }} >
          <Flex direction='column' style={{ height: '200px' }}>
            <Link href={'/game'}>
              <Button
                label='Play'
                primary={true}
              />
            </Link>
          </Flex>
        </Texture>
      </div>
    </Page>
  )
}
