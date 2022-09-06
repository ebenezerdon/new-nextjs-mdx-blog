import '../styles/globals.css'
import Nav from '../components/Nav'
import Head from 'next/head'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Next and MDX Blog</title>
      </Head>
      <div className="container">
        <Nav />
        <main>
          <Component {...pageProps} />
        </main>
      </div>
    </>
  )
}

export default MyApp
