import Head from 'next/head'
import type { AppProps } from 'next/app'

import '../styles/globals.css'
function MyApp({ Component, pageProps }: AppProps) {

  return(
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
      </Head>
      <Component {...pageProps} />
    </>
  )
}
export default MyApp
