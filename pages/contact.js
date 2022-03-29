import React from 'react'
import Contact from '../components/Contact'
import Layout from '../components/ui/Layout'
import Resume from '../components/Resume'
import Image from "next/image"
import Head from "next/head"

function contact() {
  return (
    <Layout>
        <Head>
              <title>Contact | Yanisa Poongthaisong</title>
          </Head>
        <Contact />
        <div className="mt-[60vh]"></div>
        <Resume />
    </Layout>
  )
}

export default contact