import React from 'react'
import Image from "next/image"
import { DownloadIcon} from '@heroicons/react/solid'
import data from "../data/data";

function Resume() {
  return (
    <section className=" mx-8 bg-[#070738]">
        <div className="md:flex md:flex-row md:m-10 pb-20 ">
              <div className="basis-2/3 ">
                <div className="w-full xl:mt-0 lg:mt-0  shadow-2xl shadow-indigo-400 lg:w-full xl:w-max xl:ml-96">
                  <Image src="/asset/resume.png" width={900} height={1200} objectFit="fit" className="" />
                </div>
              </div>
              <div className="basis-1/3 lg:pl-10 ">
                <a href={data.user.resume} className="inline-flex bg-black/40 w-60 ml-10 lg:ml-0 xl:ml-0 lg:w-60 xl:w-60 justify-center  border-2 mt-8 cursor-pointer transform hover:translate-x-2 transition duration-300 shadow-white shadow-lg rounded-full lg:px-2 lg:py-3  xl:px-2 xl:py-3 py-2 hover:bg-[#ffffff] hover:border-2 hover:text-indigo-400"
                >
                <DownloadIcon  className="lg:h-6 lg:w-6 md:h-6 md:w-6 sm:h-2 sm:w-2 h-6 w-6"  />
                    <h4 className="lg:text-lg xl:text-lg text-md font-bold pl-2 ">Download Resume</h4>
                </a>
              </div>
        </div>
    </section>
  )
}

export default Resume