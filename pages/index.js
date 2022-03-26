import Head from 'next/head'
import  Navbar  from '../components/ui/Navbar'
import Footer from '../components/ui/Footer'
import FeaturedProjects from '../components/FeaturedProjects'
import Hero from '../components/Hero'
import Section from "../components/ui/Section"

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
        <Section />
        <FeaturedProjects />
      </main>
      <Footer />
    </div>
  )
}
