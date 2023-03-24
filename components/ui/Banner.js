import React from "react";
import Image from "next/image";
import { ExternalLinkIcon } from "@heroicons/react/solid";
import Link from "next/link";

function Banner() {
  return (
    <div className="relative h-[300px] sm:h-[400px] lg:h-[500px] xl:h-[600] 2xl:h-[500px] font-noto ">
      <Image
        src="/asset/olivebanner.png"
        layout="fill"
        objectFit="cover"
        className="opacity-40"
      />
      <div className="absolute top-1/4 md:top-1/3 w-full text-center">
        <p className="text-white text-3xl md:text-5xl  font-black shadow-4xl opacity-100 p-3">
          Olive Platform
        </p>
        <button className="px-10 py-4 rounded-full my-3 shadow-xl xl:text-3xl md:text-2xl bsolute top-10 left-5 text-[#ffffff] font-bold lg:text-xl bg-black/50  shadow-white border-2  lg:px-12 lg:py-3  hover:bg-[#ffffff] hover:border-2 hover:text-indigo-400">
          <Link href="https://o-live.vercel.app">Visit site</Link>
          <ExternalLinkIcon className="inline-flex h- w-7 pl-2 mb-2 cursor-pointer transform " />
        </button>
      </div>
    </div>
  );
}

export default Banner;
