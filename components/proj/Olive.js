import React from 'react'
import Banner from '../ui/Banner'
import Canva from '../ui/Canva'

function Olive() {
  return (
    <section className=" mx-8 bg-[#070738]">
    <div className="max-w-8xl mx-auto  overflow-hidden xl:max-w-4xl">
        <div className="relative lg:mt-20 xl:mt-20 mt-10 inline-block px-4 py-2 lg:px-8 lg:py-3 xl:px-8 xl:py-3 md:px-8 md:py-3 overflow-hidden   group focus:outline-none focus:ring ">
          <span className="absolute inset-y-0 left-0 w-[2px] transition-all bg-indigo-300 group-hover:w-full group-active:bg-indigo-500 "></span>
          <span className="relative text-white lg:text-7xl xl:text-7xl text-3xl md:text-7xl font-bold lg:py-10 g:text-7xl text-center md:text-left transition-colors group-hover:text-[#070738] ">
            Process
          </span>
        </div>
         <Canva />
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