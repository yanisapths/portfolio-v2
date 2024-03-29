import React from "react";
import Link from "next/link";
import Image from "next/image";
import Router, { useRouter } from "next/router";
import { ArrowRightIcon } from "@heroicons/react/solid";
import { ExternalLinkIcon } from "@heroicons/react/solid";

function FeaturedProjects() {
  const router = useRouter();
  const navigate = () => {
    router.push("/projects/oliveplatform");
  };
  const p0 = {
    title: "Self-Driving car",
    date: "2023",
    tech: [
      { name: "JS" },
      { name: "HTML/CSS" },
      { name: "Machine Learning " },
      { name: "Neural Networks" },
    ],
    about:
      "Self-Driving Car with JavaScript Course – Neural Networks and Machine Learning by Dr. Radu Mariescu-Istodor",
    link: "https://self-driving-car-yanisapths.netlify.app/",
    pic: "/asset/ml/self-driving-wide.png",
  };
  const p1 = {
    title: "Physical Therapy Service Management Platform",
    date: "November 2022 - April 2023",
    award: "Scholarship Awarded from D-Plus Intertrade Co., Ltd",
    tech: [
      { name: "Next.js" },
      { name: "MongoDB" },
      { name: "Express.JS" },
      { name: "Vercel" },
    ],
    about:
      "A platform that helps physical therapy clinics and their customers by making the appointment process easier and more efficient. Customers can use the app to find clinics, book appointments, and see pricing.",
    link: "",
    caption: "Desktop / Mobile",
    pic: "/asset/preview1.png",
  };
  const p2 = {
    title: "Daycare Flutter App (Proof of concept)",
    date: "2022",
    tech: [{ name: "Flutter" }, { name: "LINE SDK" }, { name: "Firebase" }],
    about:
      "A proof of concept of a survey project which improved my Flutter skills. It contains login, homepage, show lists and detail of places fetched from API (Express.js,Node.js). I use LINE SDK for login and did a release version on Firebase App Distribution.",
    link: "",
    pic: "/asset/mobile/ol-poster-wide.png",
  };
  const p3 = {
    title: "Discord Quiz Bot",
    date: "December 2022",
    tech: [
      { name: "Discord API" },
      { name: " Python" },
      { name: "Django" },
      { name: "Heroku" },
    ],
    about:
      "Developed discord bot for helping with learning using Python on Django API framework, deploy on Heroku.",
    link: "",
    pic: "/asset/discord-bot.png",
  };
  const p4 = {
    title: "Learning Quiz Web Design",
    date: "SE Course - 2022",
    tech: [{ name: "Figma" }],
    about:
      "Designed, wireframing, and prototyping with Figma for daily-poisson web app.",
    link: "",
    pic: "/asset/SE-design.png",
  };
  return (
    <section className="mx-8 lg:mx-5 lg:pt-20 md:mx-10 bg-[#070738]">
      <div className="max-w-6xl mx-auto bg-[#070738]"></div>

      {/* Grid starts here */}
      <div className="space-y-8">
        <div className="rounded-lg max-w-2xl mx-auto">
          <div className="rounded-lg relative h-96 w-full font-homemade text-transparent hover:text-white shadow-highlight shadow-white">
            <Image
              alt="Image"
              src="/asset/preview1.png"
              layout="fill"
              objectFit="cover"
              onClick={() => navigate()}
              className="rounded-lg hover:opacity-40 cursor-pointer"
            />
            <div className="absolute -mt-6 top-1/2 w-full text-center">
              <p className="font-black text-6xl">Read More</p>
            </div>
          </div>
          <div className="mt-6">
            <h2 className="text-xl font-bold text-white">
              {p1.title}{" "}
              <p className="font-light text-xs md:text-sm text-gray-300">
                {p1.caption}
              </p>
            </h2>
            <p
              className="py-1 shadow-white drop-shadow-2xl text-xl font-bold"
              style={{
                background:
                  "linear-gradient(90deg, #008BFF 15.7%, #16C8F7 35.94%, rgba(147, 115, 249, 0.965091) 104.01%, rgba(131, 71, 238, 0.92) 123.02%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                textFillColor: "transparent",
              }}
            >
              {p1.award}
            </p>
            <p className="text-sm text-gray-300">{p1.date}</p>
            <p className="mt-4 text-white">{p1.about}</p>

            <div className="mt-4 pb-1 flex flex-wrap">
              {p1.tech.map((t) => {
                return (
                  <span key={t} className="chip">
                    {t.name}
                  </span>
                );
              })}
            </div>
            <div className="py-3">
              <a
                href="https://o-live.vercel.app"
                className="items-center flex gap-1 text-sm cursor-pointer text-sky-400 underline"
              >
                <p className="">Live - Customer App (Olive)</p>
                <ExternalLinkIcon className="h-4 w-4" />
              </a>
              <a
                href="https://daycare.vercel.app"
                className="items-center gap-1 text-sm flex cursor-pointer text-sky-400 underline"
              >
                <p className="">Live - PT Clinic Management App</p>
                <ExternalLinkIcon className="h-4 w-4" />
              </a>
            </div>
            <Link href="/projects/oliveplatform">
              <p className="cursor-pointer relative text-sm text-sky-400 font-medium before:absolute before:-bottom-1 before:h-0.5 before:w-24 before:origin-left before:scale-x-0 before:bg-sky-600 before:transition hover:before:scale-100">
                Read More...
              </p>
            </Link>
          </div>
        </div>

        {/* p0 */}
        <div className="rounded-lg max-w-2xl mx-auto">
          <div className="relative h-96 w-full rounded-lg">
            <Image
              alt="Image"
              src="/asset/ml/self-driving-wide.png"
              layout="fill"
              objectFit="cover"
              className="rounded-lg"
            />
          </div>
          <div className="mt-6">
            <h2 className="text-xl font-bold text-white">{p0.title}</h2>

            <p className="text-sm text-gray-300">{p0.date}</p>
            <p className="mt-4 text-white">{p0.about}</p>

            <div className="mt-4 pb-1 flex flex-wrap">
              {p0.tech.map((t) => {
                return (
                  <span key={t} className="chip">
                    {t.name}
                  </span>
                );
              })}
            </div>
            <a
              href="https://self-driving-car-yanisapths.netlify.app/"
              className="cursor-pointer relative text-sm text-sky-400 font-medium before:absolute before:-bottom-1 before:h-0.5 before:w-full before:origin-left before:scale-x-0 before:bg-sky-600 before:transition hover:before:scale-100"
            >
              View on website
            </a>
          </div>
        </div>
        {/* p0 */}

        {/* p2 */}
        <div className="rounded-lg max-w-2xl mx-auto">
          <div className="relative h-96 w-full rounded-lg">
            <Image
              alt="Image"
              src="/asset/mobile/ol-poster-wide.png"
              layout="fill"
              objectFit="cover"
              className="rounded-lg"
            />
          </div>
          <div className="mt-6">
            <h2 className="text-xl font-bold text-white">{p2.title}</h2>

            <p className="text-sm text-gray-300">{p2.date}</p>
            <p className="mt-4 text-white">{p2.about}</p>

            <div className="mt-4 pb-1 flex flex-wrap">
              {p2.tech.map((t) => {
                return (
                  <span key={t} className="chip">
                    {t.name}
                  </span>
                );
              })}
            </div>
            <a
              href="https://github.com/yanisapths/happyelders-customer"
              className="cursor-pointer relative text-sm text-sky-400 font-medium before:absolute before:-bottom-1 before:h-0.5 before:w-full before:origin-left before:scale-x-0 before:bg-sky-600 before:transition hover:before:scale-100"
            >
              View on Github
            </a>
          </div>
        </div>
        {/* p2 */}

        {/* p3 */}
        <div className="rounded-lg max-w-2xl mx-auto">
          <div className="rounded-lg relative h-96 w-full">
            <Image
              alt="Image"
              src="/asset/discord-bot.png"
              layout="fill"
              objectFit="cover"
              className="rounded-lg"
            />
            <a href="https://python.plainenglish.io/build-discord-quizbot-with-python-and-deploy-1-44dec1250a37">
              <h3 className="cursor-pointer absolute top-10 left-5 text-[#ffffff] font-bold lg:text-xl  md:text-xl bg-black/50 shadow-2xl shadow-white border-2 rounded-full lg:px-6 lg:py-3 px-2 md:px-4 md:py-3  hover:bg-[#ffffff] hover:border-2 hover:text-indigo-400">
                Read on Medium
                <ExternalLinkIcon className="inline-flex h- w-7 pl-2 mb-2 cursor-pointer transform " />
              </h3>
            </a>
          </div>
          <div className="mt-6">
            <h2 className="text-xl font-bold text-white">{p3.title}</h2>

            <p className="text-sm text-gray-300">{p3.date}</p>
            <p className="mt-4 text-white">{p3.about}</p>

            <div className="mt-4 pb-1 flex flex-wrap">
              {p3.tech.map((t) => {
                return (
                  <span key={t} className="chip">
                    {t.name}
                  </span>
                );
              })}
            </div>
            <a
              href="https://python.plainenglish.io/build-discord-quizbot-with-python-and-deploy-1-44dec1250a37"
              className="cursor-pointer relative text-sm text-sky-400 font-medium before:absolute before:-bottom-1 before:h-0.5 before:w-full before:origin-left before:scale-x-0 before:bg-sky-600 before:transition hover:before:scale-100"
            >
              Read on Medium
            </a>
          </div>
        </div>
        {/* p3 */}

        {/* p4 */}
        <div className="rounded-lg max-w-2xl mx-auto">
          <div className="relative h-96 w-full rounded-lg">
            <Image
              alt="Image"
              src="/asset/SE-design.png"
              layout="fill"
              objectFit="cover"
              className="rounded-lg"
            />
          </div>
          <div className="mt-6">
            <h2 className="text-xl font-bold text-white">{p4.title}</h2>

            <p className="text-sm text-gray-300">{p4.date}</p>
            <p className="mt-4 text-white">{p4.about}</p>

            <div className="mt-4 pb-1 flex flex-wrap">
              {p4.tech.map((t) => {
                return (
                  <span key={t} className="chip">
                    {t.name}
                  </span>
                );
              })}
            </div>
          </div>
        </div>
        {/* p4 */}
      </div>
    </section>
  );
}

export default FeaturedProjects;
