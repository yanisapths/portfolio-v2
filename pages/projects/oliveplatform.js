import React from 'react'
import Olive from "../../components/proj/Olive"
import Layout from '../../components/ui/Layout.js'
import Banner from '../../components/ui/Banner'
import Head from "next/head"

function oliveplatform() {
  return (
    <Layout>
          <Head>
              <title>Olive Platform | Yanisa Poongthaisong</title>
          </Head>
        <Banner />
        {/* <div className="mt-[40vh]"></div> */}
        <Olive  />
    </Layout>
  )
}

export default oliveplatform