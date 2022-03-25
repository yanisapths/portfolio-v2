import React from 'react'
import Olive from "../../components/proj/Olive"
import Layout from '../../components/ui/Layout.js'
import Banner from '../../components/ui/Banner'

function oliveplatform() {
  return (
    <Layout>
        <Banner />
        {/* <div className="mt-[40vh]"></div> */}
        <Olive  />
    </Layout>
  )
}

export default oliveplatform