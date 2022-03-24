import React from 'react'

function Hero() {
  return (
    <div className="lg:flex lg:flex-row block overflow-hidden lg:grid-cols-2">
      {/* Right Text container */}
        <div className="pt-20 text-left  lg:w-1/2 p-5 pl-14 xl:ml-60 xl:-mr-24 lg:pt-48 ">
        <h1 className="text-white font-extrabold xl:text-7xl text-3xl  sm:text-6xl lg:text-6xl">
            Yanisa Poongthaisong
        </h1>
        <h2 className="pt-4 text-indigo-800 font-bold xl:text-5xl text-xl sm:text-2xl lg:text-4xl ">
            " Dookdik "
        </h2>
        <h3 className="pt-2 text-indigo-400 font-bold  xl:text-6xl text-3xl sm:text-4xl lg:text-6xl">
            Design | Dev 
        </h3>
        </div>
        {/* Left Image container */}
      <div className="p-24 sm:p-32 sm:-mt-16 -mt-10 xl:mt-24 xl:p-0 xl:pl-48  lg:pr-14 lg:mt-32  lg:w-1/2 lg:block  ">
          <img src="/asset/user.jpg" className="w-full rounded-xl xl:w-[60%] lg:w-[90%]" />
      </div>
      <div>
        <p>
          M
        </p>
      </div>
    </div>
  )
}

export default Hero