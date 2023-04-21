import React from "react";
import About from "../components/About";
import Layout from "../components/ui/Layout";
import Head from "next/head";
import Link from "next/link";

function about() {
  return (
    <Layout>
      <Head>
        <title>About | Yanisa Poongthaisong</title>
      </Head>
      <div className="grid place-content-center min-h-screen mb-12">
        <About />
        <div className="lg:pt-10 flex flex-wrap justify-center gap-4">
          <button className="block w-2/6 lg:w-1/6 text-white justify-center border-2 cursor-pointer transform hover:translate-x-2 transition duration-300 shadow-white shadow-lg rounded-full  hover:bg-[#ffffff] hover:border-2 hover:text-indigo-400 px-8 py-3 text-sm font-medium">
            <Link href="/projects/">
              <h4 className="text-sm font-bold">View Projects</h4>
            </Link>
          </button>
        </div>
      </div>
    </Layout>
  );
}

export default about;
