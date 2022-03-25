import React from 'react'
import Navbar from "./Navbar"
import Footer from "./Footer"
import Head from "next/head"

function Layout({children}) {

    const meta ={
        title: "Yanisa Poongthaisong",
    }
  return (
    <div>
        <Head>
            <title>{meta.title}</title>
        </Head>
        <Navbar />
        <main className="flex-auto w-full h-full overflow-hidden bg-[#070738] text-gray-300 ">
                 <div>{children}</div>
        </main>
        <Footer />
    </div>
  )
}

export default Layout