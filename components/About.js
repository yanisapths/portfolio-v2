import React from "react";
import data from "../data/data";
import Image from "next/image";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import PhoneIcon from "@mui/icons-material/Phone";
import Intro from "../components/Intro";
import BackNavigate from "./ui/BackNavigate";

function About() {
  const Mailto = ({ email, subject = "", body = "", children }) => {
    let params = subject || body ? "?" : "";
    if (subject) params += `subject=${encodeURIComponent(subject)}`;
    if (body) params += `${subject ? "&" : ""}body=${encodeURIComponent(body)}`;

    return <a href={`mailto:${email}${params}`}>{children}</a>;
  };
  return (
    <section className="bg-[#070738]">
      <div className="mt-10 px-48">
        <BackNavigate />
      </div>
      <div className="bg-[#070738]">
        <h1 className="font-homemade text-4xl xl:pl-48 lg:text-7xl font-bold py-10 lg:py-12 text-center md:text-left">
          About me
        </h1>
      </div>
      {/* Grid starts here */}
      <div className="bg-[#070738] justify-center grid grid-cols-1 xl:grid xl:grid-cols-2 lg:grid lg:grid-cols-2">
        {/* Left Grid */}
        <div className="items-center content-center mx-auto pb-10">
          <img src="/asset/user.jpg" className="rounded-full h-40 w-40" />
          <div className="w-full text-sm md:text-md">
            <div className="flex gap-2 pt-4 items-center">
              <MailOutlineIcon className="w-4 h-4" />
              <Mailto email="yanisa21@live.com" subject="Hello Yanisa!" body="">
                <p className="hover:underline">yanisa21@live.com</p>
              </Mailto>
            </div>
            <div className="flex gap-2 pt-2 items-center">
              <PhoneIcon className="w-4 h-4" />
              <p className="hover:underline">(+66) 86 306 6625</p>
            </div>
            <div className="flex gap-2 pt-2 items-center">
              <Image
                src="/logo/medium.svg"
                width={18}
                height={18}
                className="invert"
              />
              <a href={data.socialLinks.medium}>
                <span className="hover:underline">@yanisa-poongthaisong</span>
              </a>
            </div>
            <div className="flex gap-2 pt-2 items-center">
              <Image
                src="/logo/github.svg"
                width={18}
                height={18}
                className="invert"
              />
              <a href={data.socialLinks.github}>
                <span className="hover:underline">yanisapths</span>
              </a>
            </div>
            <div className="flex gap-2 pt-2 items-center">
              <Image
                src="/logo/linkedin.svg"
                width={18}
                height={18}
                className="invert"
              />
              <a href={data.socialLinks.linkedin}>
                <span className="hover:underline">yanisa-poongthaisong</span>
              </a>
            </div>
          </div>
        </div>
        {/* Right Grid */}
        <div className="mx-16 md:px-28 pb-24 lg:-ml-32 xl:-ml-72">
          <p className="text-xs px-8 md:text-md md:px-12 lg:text-lg mb-10 xl:w-4/5">
            Hej👋 My name is Yanisa Poongthaisong or you can call me Dookdik. My
            key strengths are mostly front-end development. I am most proficient
            with Next.js / React.js. A little bit of Flutter / Native Android /
            Vue.js / Django. My backend ecosystems includes AWS, GCP, Firebase,
            ExpressJS, MongoDB, Docker, and DynamoDB.
          </p>
          <div className="px-8 md:px-12">
            <Intro />
          </div>
          {/* certs */}
          {/* education */}
          <div className="items-center px-8 md:px-12 max-w-2xl">
            <div className="text-gray-100 text-sm gap-4">
              <h2 className="mt-6 text-xl text-white font-extrabold">
                CERTIFICATES
              </h2>
              <div className="py-4">
                <p className="text-gray-400 mt-3">1 Dec 2021</p>
                <p className="text-lg font-bold text-indigo-300">
                  CompTIA Network+ (N10-008) Full Course & Practice Exam
                </p>
                <p>Course by Jason Dion on Udemy</p>

                <a
                  href={data.cert.network}
                  className="relative text-sm text-sky-400 font-medium before:absolute before:-bottom-1 before:h-0.5 before:w-full before:origin-left before:scale-x-0 before:bg-sky-600 before:transition hover:before:scale-100"
                >
                  See on Udemy
                </a>
              </div>

              <div className="py-4">
                <p className="text-gray-400 mt-3">5 Dec 2021</p>
                <p className="text-lg font-bold text-indigo-300">
                  CCSK V4.1 FOUNDATION TRAINING
                </p>
                <p>Cloud Security Alliance</p>

                <a
                  href={data.cert.cisco}
                  className="relative text-sm text-sky-400 font-medium before:absolute before:-bottom-1 before:h-0.5 before:w-full before:origin-left before:scale-x-0 before:bg-sky-600 before:transition hover:before:scale-100"
                >
                  Download (.pdf)
                </a>
              </div>

              <div className="py-4">
                <p className="text-gray-400 mt-3">12 Dec 2021</p>
                <p className="text-lg font-bold text-indigo-300">
                  Ethereum and Solidity: The Complete Developers Guide
                </p>
                <p>Course by Stephen Grider on Udemy</p>

                <a
                  href={data.cert.ether}
                  className="relative text-sm text-sky-400 font-medium before:absolute before:-bottom-1 before:h-0.5 before:w-full before:origin-left before:scale-x-0 before:bg-sky-600 before:transition hover:before:scale-100"
                >
                  See on Udemy
                </a>
              </div>

              <div className="py-4">
                <p className="text-gray-400 mt-3">30 Jan 2021</p>
                <p className="text-lg font-bold text-indigo-300">
                  HCIA-Cloud Service
                </p>
                <p>Huawei</p>

                <a
                  href={data.cert.huawei}
                  className="relative text-sm text-sky-400 font-medium before:absolute before:-bottom-1 before:h-0.5 before:w-full before:origin-left before:scale-x-0 before:bg-sky-600 before:transition hover:before:scale-100"
                >
                  Download (.pdf)
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
