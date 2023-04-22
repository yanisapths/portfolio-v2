import React from "react";
import Canva from "../ui/Canva";
import Youtube from "../ui/Youtube";
import Link from "next/link";
import BackNavigate from "../ui/BackNavigate";
import Process from "./Process";

function Olive() {
  return (
    <section className="mx-8 bg-[#070738]">
      <div className="max-w-8xl mx-auto overflow-hidden xl:max-w-4xl pb-20 ">
       <div className="pt-10">
        <BackNavigate />
        </div>
        <div className="relative mt-4 inline-block px-4 py-2  overflow-hidden group focus:outline-none focus:ring">
          <span className="relative text-white text-3xl md:text-4xl font-bold">
            Overview
          </span>
        </div>
        <div className="mt-6 mb-5">
          <Process />
        </div>
        <Canva />
        <Youtube link="https://www.youtube.com/embed/lQzAY91wq6Y" />

        <div className="xl:mt-48 lg:mt-36 bg-black/40 w-60 ml-10 lg:ml-[27rem] xl:ml-80 md:ml-80 lg:w-64 xl:w-64 justify-center  border-2 mt-8 cursor-pointer transform hover:translate-x-2 transition duration-300 shadow-white shadow-lg rounded-full px-6 py-2 hover:bg-[#ffffff] hover:border-2 hover:text-indigo-400">
          <Link href="/projects/">
            <h4 className="lg:text-lg xl:text-lg text-sm font-bold pl-6 ">
              View More Projects
            </h4>
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Olive;
