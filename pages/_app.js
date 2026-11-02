import '/styles/globals.css'
import { ClerkProvider } from '@clerk/nextjs'
import Head from 'next/head'
import Header from '../components/Header'

const MyApp = ({ Component, pageProps }) => (
  <ClerkProvider {...pageProps}>
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <div className="app-shell">
      <Header />
      <Component {...pageProps} />
    </div>
  </ClerkProvider>
)

export default MyApp
