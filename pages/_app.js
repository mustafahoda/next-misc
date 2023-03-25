import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Head from 'next/head'
import '@/styles/globals.css'
import '@/styles/layout.css'

export default function App({ Component, pageProps }) {



  console.log(Component.getLayout)
  if (Component.getLayout) {
    return (Component.getLayout(<Component {...pageProps} />))
  }

  return (
    <>
      <Head>
        <title>YOOOO</title>
        <meta name="description" content="Awesome Youtube Channel"></meta>
      </Head>
      <Header></Header>
      <Component {...pageProps} />
      <Footer></Footer>
    </>
  )
}

