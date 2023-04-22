import React from "react";
import Head from "next/head";
import Navbar from "../components/ui/Navbar";
import Footer from "../components/ui/Footer";
import FeaturedProjects from "../components/FeaturedProjects";
import Hero from "../components/Hero";
import Section from "../components/ui/Section";
import Link from "next/link";
import Intro from "../components/Intro";
import ScrollingMouse from "../components/ui/ScrollingMouse";

export default function Home() {
  const handleScroll = (e) => {
    // first prevent the default behavior
    e.preventDefault();
    // get the href and remove everything before the hash (#)
    const href = e.currentTarget.href;
    const targetId = href.replace(/.*\#/, "");
    // get the element by id and use scrollIntoView
    const elem = document.getElementById(targetId);
    elem?.scrollIntoView({
      behavior: "smooth",
    });
  };
  return (
    <div>
      <Head>
        <title>Yanisa Poongthaisong</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <main className="flex-auto">
        <section
          className="grid place-content-center px-12 mt-10 lg:mt-0 min-h-screen"
          id="section-0"
        >
          <Hero />
          <h2 className="text-xl text-center py-6 text-gray-300">About Me</h2>
          <Intro />
        </section>
        <div
          className="grid place-content-center min-h-screen text-gray-50"
          id="section-1"
        >
          <section className="flex flex-col items-center gap-8">
            <Section />
            <h2 className="text-xl py-6 text-gray-300">Highlight Projects</h2>
            <ScrollingMouse link="#section-2" handleScroll={handleScroll} />
          </section>
        </div>
        {/* add id to section */}
        <section
          className="grid place-content-center mt-8 min-h-screen"
          id="section-2"
        >
          <div className="flex flex-col items-center gap-4">
            <h2 className="text-xl py-6 text-gray-300"></h2>
            <FeaturedProjects />
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <button className="block w-full text-white justify-center border-2 cursor-pointer transform hover:translate-x-2 transition duration-300 shadow-white shadow-lg rounded-full  hover:bg-[#ffffff] hover:border-2 hover:text-indigo-400 px-8 py-3 text-sm font-medium ">
                <Link href="/projects/">
                  <h4 className="text-sm font-bold">View More Projects</h4>
                </Link>
              </button>
            </div>
            <Link className="btn" href="#section-0" onClick={handleScroll}>
              <p className="pt-6 hover:scale-95 hover:text-white text-gray-300 cursor-pointer">
                Back to Top
              </p>
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
