import React from 'react'
import Banner from '../ui/Banner'
import Canva from '../ui/Canva'
import Link from "next/link"

function Olive() {
  return (
    <section className=" mx-8 bg-[#070738]">
    <div className="max-w-8xl mx-auto  overflow-hidden xl:max-w-4xl pb-20 ">
        <div className="relative lg:mt-20 xl:mt-20 mt-10 inline-block px-4 py-2 lg:px-8 lg:py-3 xl:px-8 xl:py-3 md:px-8 md:py-3 overflow-hidden   group focus:outline-none focus:ring ">
          <span className="absolute inset-y-0 left-0 w-[2px] transition-all bg-indigo-300 group-hover:w-full group-active:bg-indigo-500 "></span>
          <span className="relative text-white lg:text-7xl xl:text-7xl text-3xl md:text-7xl font-bold lg:py-10 g:text-7xl text-center md:text-left transition-colors group-hover:text-[#070738] ">
            Process
          </span>
        </div>
         <Canva />
         <div  className=" xl:mt-48 lg:mt-36 bg-black/40 w-60 ml-10 lg:ml-[23rem] xl:ml-80 lg:w-64 xl:w-64 justify-center  border-2 mt-8 cursor-pointer transform hover:translate-x-2 transition duration-300 shadow-white shadow-lg rounded-full px-6 py-2  hover:bg-[#ffffff] hover:border-2 hover:text-indigo-400">
            <Link
                href="/projects/"
                >
                <h4 className="lg:text-lg xl:text-lg text-md font-bold pl-6 ">View More Projects</h4>
            </Link>
         </div>
          {/* <div className=" bg-sky-600 ">
            hei
          </div>
          <div className="bg-red-200  ">

          </div> */}
    </div>
</section>
  )
}

export default Olive