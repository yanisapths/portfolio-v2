import Head from 'next/head'
import  Navbar  from '../components/navbar/Navbar'
import Footer from '../components/footer/Footer'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Yanisa Poongthaisong</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <main className="bg-indigo-900 h-[90vh]">

      </main>
      <Footer />
    </div>
  )
}
