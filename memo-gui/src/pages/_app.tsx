import '@/styles/globals.css'
import type { AppProps } from 'next/app'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { Inter } from 'next/font/google'

import { Texture } from '@atom/texture/Texture'
import { Page } from '@atom/page/Page'
import { Loading } from '@/components/atoms/loading/Loading'

const inter = Inter({ subsets: ['latin'] })

export default function App({ Component, pageProps }: AppProps) {

  const [ loading, setLoading] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const showLoading = () => setLoading(true);
    const hideLoading = () => setLoading(false);

    router.events.on('routeChangeStart', showLoading);
    router.events.on('routeChangeComplete', hideLoading);

    return () => {
      router.events.off('routeChangeStart', showLoading);
      router.events.off('routeChangeComplete', hideLoading);
    }
  }, [])

  return (
    <Page title='Memo Test' inter={inter}>
      <Texture type='upholstery' style={{ height: '100%' }}>
        {
          loading ?
          <Loading />:
          <Component {...pageProps} />
        }
      </Texture>
    </Page>
  )
}
