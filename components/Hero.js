import React from 'react'

function Hero() {
  return (
    <div className="flex flex-row justify-center overflow-hidden mr-0 mx-w-6xl  ">
        {/* Image container */}
      <div className="hidden  md:ml-0  lg:block relative w-full lg:basis-1/3 lg:mr-0  lg:w-1/3 mt-20 ">
          <img src="/asset/user.jpg" width="400" height="450" />
      </div>
      {/* Text container */}
        <div className="lg:basis-2/3  text-left pt-20">
        <h1 className="text-white font-extrabold lg:text-7xl text-3xl ">
            Yanisa Poongthaisong
        </h1>
        </div>
    </div>
  )
}

export default Hero