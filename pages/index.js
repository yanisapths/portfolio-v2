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
import Youtube from "../components/ui/Youtube";
import FloatingNav from "../components/FloatingNav";

export default function Home() {
  const Mailto = ({ email, subject = "", body = "", children }) => {
    let params = subject || body ? "?" : "";
    if (subject) params += `subject=${encodeURIComponent(subject)}`;
    if (body) params += `${subject ? "&" : ""}body=${encodeURIComponent(body)}`;

    return <a href={`mailto:${email}${params}`}>{children}</a>;
  };
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
      <FloatingNav handleScroll={handleScroll} />
      <main className="flex-auto">
        <section
          className="grid place-content-center px-4 py-40 sm:py-0 sm:min-h-screen"
          id="section-0"
        >
          <Hero />
        </section>
        <section
          className="grid place-content-center px-4 min-h-screen"
          id="section-1"
        >
          <h2 className="text-xl text-center py-6 text-gray-300">About Me</h2>
          <div c className="flex flex-col items-center gap-8">
            <Section />
          </div>
        </section>
        <section className="px-12" id="section-2">
          <div className="mx-auto overflow-hidden max-w-xl">
            <div className="flex flex-col items-center gap-5">
              <h2 className="text-xl py-6 text-gray-300">Resume</h2>
              <Intro />
              <h2 className="text-xl text-gray-300">Highlight Projects</h2>
              <ScrollingMouse link="#section-3" handleScroll={handleScroll} />
            </div>
          </div>
        </section>

        <section
          className="grid place-content-center min-h-screen"
          id="section-3"
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
          </div>
        </section>
        <section className="px-12 mt-20" id="section-4">
          <div className="mx-auto overflow-hidden max-w-xl">
            <div className="flex flex-col items-center gap-4">
              <h2 className="text-xl py-6 text-gray-300">Video</h2>
              <Youtube link="https://www.youtube.com/embed/lQzAY91wq6Y" />
            </div>
          </div>
        </section>
        <section className="px-12 mt-20" id="section-5">
          <div className="mx-auto overflow-hidden max-w-xl">
            <div className="flex flex-col items-center gap-5">
              <h2 className="text-xl py-6 text-gray-300">Get In Touch</h2>
              <p className="text-center text-white">
                My inbox is always open. Whether you'd like to Say Hi, Ask a
                Question or build some projects together, you can contact me on{" "}
                <span className="hover:underline text-sky-400">
                  <a href="https://line.me/R/ti/p/ddyns">LINE</a>
                </span>{" "}
                or
                <span className="hover:underline text-sky-400">
                  {" "}
                  <Mailto
                    email="yanisa21@live.com"
                    subject="Hi Yanisa!"
                    body=""
                  >
                    email.
                  </Mailto>
                </span>
              </p>
            </div>
          </div>
          <Link className="btn" href="#section-0" onClick={handleScroll}>
            <p className="pt-6 font-bold text-center hover:scale-95 hover:text-white text-gray-300 cursor-pointer">
              Back to Top
            </p>
          </Link>
        </section>
      </main>
      <Footer />
    </div>
  );
}
