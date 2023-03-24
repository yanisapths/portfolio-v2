import React from 'react'
import Contact from '../components/Contact'
import Layout from '../components/ui/Layout'
import Head from "next/head"

function contact() {
  return (
    <Layout>
        <Head>
              <title>Contact | Yanisa Poongthaisong</title>
          </Head>
        <Contact />
    </Layout>
  )
}

export default contact