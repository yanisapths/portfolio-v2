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
      <main className="flex-auto">
        <div className="h-screen overflow-hidden bg-[#070738] text-gray-300  pt-32  ">
          <h1 className="text-6xl m-12">Yanisa Poongthaisong</h1>
          <p className="text-xl">
            This is portfolio by Yanisa
          </p>
        </div>
      </main>
      <Footer />
    </div>
  )
}
