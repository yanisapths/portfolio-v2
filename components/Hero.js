import { useEffect, useRef } from "react";
import { init } from "ityped";

function Hero() {
  const textRef = useRef();

  useEffect(() => {
    //console.log(textRef);
    init(textRef.current, {
      showCursor: true,
      backDelay: 1500,
      backSpeed: 60,
      strings: [" and build."],
    });
  }, []);
  return (
    <div className=" block overflow-hidden ">
      {/* Right Text container */}
      <div className="pt-20 text-left p-8 md:pl-40 lg:pl-40  lg:pt-48 xl:pl-[28rem]">
        <h2  className="py-6 text-indigo-400 font-bold xl:text-md sm:text-lg">
          Hej 👋 My name is
        </h2>
        <h1 className="font-homemade text-white font-extrabold xl:text-7xl text-3xl  sm:text-6xl lg:text-6xl">
         Yanisa Poongthaisong
        </h1>
        <h3 className="pt-10 text-indigo-400 font-bold xl:text-7xl text-3xl sm:text-4xl lg:text-6xl">
          I design <span ref={textRef}></span>
        </h3>
      </div>
    </div>
  );
}

export default Hero;
