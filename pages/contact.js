import React from 'react'
import Contact from '../components/Contact'
import Layout from '../components/Layout'
import Resume from '../components/Resume'

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