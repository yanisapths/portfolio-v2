import React from "react";
import Image from "next/image";

function Process() {
  return (
    <section className="px-6 bg-[#070738]">
      <div className="max-w-8xl mx-auto overflow-hidden xl:max-w-4xl pb-20 ">
        <h1 className="text-xl mb-4 md:mb-12 font-bold">Team</h1>
        <div className="flex gap-6 md:gap-8">
          <div>
            <Image
              src="/asset/user.jpg"
              width="80"
              height="80"
              className="rounded-full"
            />
            <p className="pt-1 text-xs md:text-lg">Yanisa Poongthaisong</p>
          </div>
          <div>
            <Image
              src="/asset/ayne1.jpg"
              width="80"
              height="80"
              className="rounded-full"
            />
            <p className="pt-1 text-xs md:text-lg">Pavinee Suthamjeam</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Process;
