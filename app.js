import '../styles/globals.css'
import Head from 'next/head'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <meta name="description" content="Anuj baby — MCA Student & Software Engineer. Portfolio: Nexus AI Assistant, Arogya Nexus, and Premium Portfolio." />
        <link rel="icon" href="/favicon.ico" />
        <title>Anuj baby — Portfolio</title>
      </Head>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp

