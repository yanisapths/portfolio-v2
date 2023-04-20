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
        <Hero />
        <Section />
        <FeaturedProjects />
      </main>
      <Footer />
    </div>
  )
}
