import Head from 'next/head'
import  Navbar  from '../components/navbar/Navbar'
import Footer from '../components/footer/Footer'
import FeaturedProjects from '../components/FeaturedProjects'
import Hero from '../components/Hero'
export default function Home() {
  return (
    <div>
      <Head>
        <title>Yanisa Poongthaisong</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <main className="flex-auto">
        {/* <div className="h-screen overflow-hidden bg-[#070738] text-gray-300  pt-32  ">
        </div> */}
        <Hero />
        <FeaturedProjects />
      </main>
      <Footer />
    </div>
  )
}
