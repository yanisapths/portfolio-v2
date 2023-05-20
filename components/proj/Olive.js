import React from "react";
import Canva from "../ui/Canva";
import Youtube from "../ui/Youtube";
import Link from "next/link";
import BackNavigate from "../ui/BackNavigate";
import Process from "./Process";
import Image from "next/image";
import { ExternalLinkIcon } from "@heroicons/react/solid";
import IndexContent from "./IndexContent";

function Olive() {
  return (
    <section className="px-12 bg-[#f8f8f8] text-[#121212]">
      <div className="max-w-8xl mx-auto overflow-hidden xl:max-w-4xl pb-20">
        <div className="md:flex">
          <div className="w-full md:w-4/6">
            <div className="pt-10">
              <BackNavigate light={true} />
            </div>
            <section
              className="relative mt-4 inline-block px-4 py-2"
              id="section-0"
            >
              <span className="relative text-3xl md:text-4xl font-bold">
                Overview
              </span>
              <div className="mt-6">
                <Process />
              </div>
            </section>
            <section
              className="grid place-content-center px-4 sm:min-h-screen"
              id="section-1"
            >
              <div className="pt-4 mt-12 lg:mx-24">
                <Image
                  src="/asset/olive/techstack.png"
                  width={1200}
                  height={650}
                />
              </div>
              <p className="pt-6 text-sm">
                All three frontend web applications (Admin, Clinic Management
                and customer application) are Next.js application deployed on
                Vercel and use OAuth service from NextAuth.js with the chosen
                providers; Google and LINE Login for authentication. The
                server-side framework is Express.js running inside a Node.js
                server and interact with MongoDB Database using Mongoose. We use
                Github Version control integrates with automatic deployments on
                Vercel on every push that merges onto the production branch.
              </p>
              <h3 className="text-3xl mt-12 font-bold pb-4">
                Use Case Diagram
              </h3>
              <p className="text-sm">
                The use case diagram shows where customers make reservation for
                an appointment that interacts with the clinic application. The
                diagram also appears when admin verify the clinic.
              </p>
              <div className="pt-10 lg:mx-20">
                <Image
                  src="/asset/olive/ucdiagram.png"
                  width={500}
                  height={600}
                />
              </div>
            </section>

            <section
              className="relative mt-4 inline-block px-4 py-2 min-h-screen"
              id="section-2"
            >
              <div className="relative mt-4 inline-block px-4 py-2  overflow-hidden group focus:outline-none focus:ring">
                <div className="pt-4">
                  <h3 className="text-3xl font-bold pb-6">
                    Customer Application
                  </h3>
                  <p className="text-sm">
                    The project also provides a convenience web application to
                    support people in general with the function to explore
                    clinics, compare courses or service packages, easily look up
                    to their upcoming appointment schedule, and get information
                    about physical therapist clinics from anywhere.
                  </p>
                </div>
                <div className="pt-8 lg:mx-20">
                  <Image
                    src="/asset/olive/customer.png"
                    width={500}
                    height={900}
                  />
                </div>
              </div>
            </section>

            <section
              className="relative mt-4 inline-block px-4 py-2 min-h-screen"
              id="section-3"
            >
              <div className="pt-4 mt-12">
                <h3 className="text-3xl font-bold pb-6">
                  Clinic Management Platform
                </h3>
                <p className="text-sm">
                  Through this application, anyone can registered their clinic
                  into the system and provides necessary information to become a
                  verified physical therapy service providers. The application
                  presents features to manage their clinic business for
                  instance, employee management, time slot availability, package
                  or courses that the clinic provides and offers, maintain
                  records of patient report, appointment management features and
                  reviews.
                </p>

                <div className="pt-8 lg:mx-20">
                  <Image
                    src="/asset/olive/clinic.png"
                    width={500}
                    height={1000}
                  />
                </div>
              </div>
            </section>

            <section className="lg:mx-20 min-h-screen" id="section-4">
              <h3 className="text-3xl font-bold pt-24 pb-4 text-center">
                Media
              </h3>
              <div className="items-center">
                <Canva />
                <Youtube link="https://www.youtube.com/embed/lQzAY91wq6Y" />
                <div className="pt-12">
                  <a
                    href="https://o-live.vercel.app"
                    className="items-center flex gap-1 text-lg cursor-pointer text-sky-400 underline"
                  >
                    <p className="">Live - Customer App (Olive)</p>
                    <ExternalLinkIcon className="h-4 w-4" />
                  </a>
                  <a
                    href="https://daycare.vercel.app"
                    className="items-center gap-1 text-lg flex cursor-pointer text-sky-400 underline"
                  >
                    <p className="">Live - PT Clinic Management App</p>
                    <ExternalLinkIcon className="h-4 w-4" />
                  </a>
                </div>
              </div>
              <div className="hover:bg-indigo-50 px-6 w-fit h-fit justify-center mt-8 cursor-pointer transform hover:translate-x-2 transition duration-300 shadow-white shadow-lg rounded-full py-2 bg-[#ffffff] border-2 border-indigo-400 text-indigo-400">
                <Link href="/projects/">
                  <h4 className="lg:text-lg text-sm font-bold">
                    View More Projects
                  </h4>
                </Link>
              </div>
            </section>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Olive;
