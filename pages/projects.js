import React , {useState , useEffect} from 'react'
import Projects from '../components/Projects.js'
import Layout from '../components/ui/Layout.js'
import Head from "next/head"

function projects() {
 
  return (
      <Layout>
          <Head>
              <title>Projects | Yanisa Poongthaisong</title>
          </Head>
          <Projects />
      </Layout>
  )
}

export default projects;