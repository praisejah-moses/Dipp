import Head from 'next/head'
import Card from '../../componets/Card'
import Stats from '../../componets/Stats'
import Cryptos from '../../componets/Cryptos'


export default function Home() {
  return (
    <>
      <Head>
        <title>Dipp | Cryptocurrency Prices, News and Market Watch</title>
        <meta name="description" content="Dipp" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico"/>
      </Head>
      <main className='homeContainer'>
        <Stats/>
        <Card/>
        <Cryptos/>
      </main>
    </>
  )
};

