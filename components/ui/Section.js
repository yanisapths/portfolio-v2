import React from 'react'
import Link from "next/link"

function Section() {
  return (
    <section>
        <div className="px-8 py-16 mx-auto max-w-screen-2xl sm:px-6 lg:px-60 xl:px-96 xl:mt-10 xl:mb-40 md:px-48" >
            <div className="grid grid-cols-1 lg:grid-cols-2 h:-1/6 lg:h-1/6 xl:h-[10rem] ">
            <div className="relative z-10 lg:py-12 md:px-2 lg:px-2 xl:px-2 xl:py-6 px-20">
                <div className="relative h-40 sm:h-80 lg:h-full shadow-2xl shadow-indigo-700">
                <img
                    className="absolute inset-0 object-cover w-full h-full"
                    src="/asset/user.jpg"
                />
                </div>
            </div>

            <div className="relative flex items-center bg-[#070738] lg:h-[24rem] xl:h-[24rem]   xl:w-[32rem] ml-8 -mt-8 shadow-2xl">
                <span
                className="hidden lg:inset-y-0 lg:absolute  lg:w-16 lg:bg-[#070738] lg:block lg:-left-16 "
                ></span>

                <div className="p-10 sm:p-16 lg:p-4 ">
                <h2 className="text-2xl font-bold sm:text-3xl text-white">
                   About me
                </h2>

                <p className="mt-4 text-lg pr-4 text-white">
                    Read general info, some past experience, and my background on this page.
                </p>
                <div   className="cursor-pointer inline-block font-bold px-12 py-3 mt-8 text-md text-indigo-200 bg-[#070738] border border-indigo-700 rounded-lg  hover:bg-indigo-700 hover:text-white active:text-white focus:outline-none focus:ring shadow-indigo-400 shadow-md">
                <Link
                    href="/about"
                >
                    Read
                </Link>
                </div>
                </div>
            </div>
            </div>
        </div>
    </section>
  )
}

export default Section