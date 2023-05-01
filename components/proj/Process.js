import React from "react";
import Image from "next/image";

function Process() {
  return (
    <section className="px-6 ">
      <div className="max-w-8xl mx-auto overflow-hidden xl:max-w-4xl">
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
        <div className="pt-16">
          <p className="text-sm">
            This project is a physical therapy service management platform
            development by helping physical therapy clinics and their customers
            by making the appointment process easier and more efficient.
            Customers can use the app to find clinics, book appointments, and
            see pricing. The application also helps clinics streamline their
            operations by keeping everything in one place.
          </p>
          <p className="text-sm pt-2 lg:pt-4">
            This platform is developed with Next.js framework on React
            application. We used Express.js for request handling and use MongoDB
            for a cloud database.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Process;
