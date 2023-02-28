import Landing from '@/src/components/Landing/Landing'
import Layout from '@/src/components/Layout/Layout'
import Head from 'next/head'

export default function Home() {
  return (
    <>
      <Head>
        <title>Feria de la solidaridad</title>
        <meta name="description" content="Feria de la solidaridad UCA" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/images/logo-feria.png" />
      </Head>
      <Landing />
    </>
  )
}
