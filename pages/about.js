import React from 'react'
import About from '../components/About'
import Layout from '../components/ui/Layout'
import Head from "next/head"

function about() {
  return (
    <Layout>
       <Head>
              <title>About | Yanisa Poongthaisong</title>
          </Head>
        <About />
    </Layout>
  )
}

export default about