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
    <section className="flex flex-col items-center">
      <div className="mx-auto max-w-screen-xl px-4 pb-32 lg:flex lg:h-screen lg:items-center">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="py-6 text-indigo-400 font-bold xl:text-md sm:text-lg">
            Hej 👋 My name is
          </h2>
          <h1 className="font-homemade text-white font-extrabold xl:text-7xl text-3xl  sm:text-6xl lg:text-6xl">
            Yanisa Poongthaisong
          </h1>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <h3 className="pt-10 text-indigo-400 font-bold xl:text-7xl text-3xl sm:text-4xl lg:text-6xl">
              I design <span ref={textRef}></span>
            </h3>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
