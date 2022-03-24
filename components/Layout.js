import React from 'react'
import Navbar from "../components/navbar/Navbar"
import Footer from "../components/footer/Footer"
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
        <main className="flex-auto">
            <div className="h-screen overflow-hidden bg-[#070738] text-gray-300  ">
                 <div>{children}</div>
            </div>
        </main>
        <Footer />
    </div>
  )
}

export default Layout