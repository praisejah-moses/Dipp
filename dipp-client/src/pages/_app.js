import '@/styles/global.css'
import Layout from '../../componets/Layout'
import {Montserrat} from 'next/font/google'

const bodyFont = Montserrat()

export default function App({ Component, pageProps}) {
  return( 
  <main className={bodyFont.className}>
  <Layout>
    <Component {...pageProps} />
  </Layout>
  </main>
  )
}
