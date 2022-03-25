import React from 'react'
import Contact from '../components/Contact'
import Layout from '../components/ui/Layout'
import Resume from '../components/Resume'
import Image from "next/image"

function contact() {
  return (
    <Layout>
        <Contact />
        <div className="mt-[60vh]"></div>
        <Resume />
    </Layout>
  )
}

export default contact