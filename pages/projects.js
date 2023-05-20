import React, { useState, useEffect } from "react";
import Layout from "../components/ui/Layout.js";
import Head from "next/head";
import ProjectList from "../components/ProjectList";
import { All, design, dev, bot, mobile ,ml} from "../data/proj";
import BackNavigate from "../components/ui/BackNavigate.js";
import Tooltip from "@mui/material/Tooltip";
export default function Project() {
  const [selected, setSelected] = useState("projects");
  const [data, setData] = useState([]);
  const list = [
    {
      id: "all",
      title: "All",
    },
    {
      id: "design",
      title: "Design",
    },
    {
      id: "dev",
      title: "Development",
    },
    {
      id: "bot",
      title: "Bot",
    },
    {
      id: "mobile",
      title: "mobile",
    },
    {
      id: "machine-learning",
      title: "machine-learning",
    },
  ];

  useEffect(() => {
    switch (selected) {
      case "design":
        setData(design);
        break;
      case "dev":
        setData(dev);
        break;
      case "bot":
        setData(bot);
        break;
      case "mobile":
        setData(mobile);
        break;
        case "machine-learning":
          setData(ml);
          break;

      default:
        setData(All);
    }
  }, [selected]);

  const ProjectCard = ({
    title,
    imgUrl,
    link,
    id,
    type,
    tech,
    award,
    caption,
    about,
    date,
    moreinfo,
    hoverText,
  }) => {
    return (
      <a href={link} id={id} type={type} className="w-full md:px-6">
        <div className="relative overflow-hidden">
          <div className="">
            {" "}
            <Tooltip title={hoverText}>
              <img
                src={imgUrl}
                alt="portfolio"
                className="transform hover:scale-125 w-full h-60 transition duration-2000 ease-out object-cover"
              />
            </Tooltip>
          </div>
        </div>
        <div className="mt-4 md:mt-6">
          <h2 className="text-lg md:text-xl font-bold text-white">
            {title}{" "}
            <p className="font-light text-xs md:text-sm text-gray-300">
              {caption}
            </p>
          </h2>
          <p
            className="py-1 shadow-white drop-shadow-2xl text-sm font-bold"
            style={{
              background:
                "linear-gradient(90deg, #008BFF 15.7%, #16C8F7 35.94%, rgba(147, 115, 249, 0.965091) 104.01%, rgba(131, 71, 238, 0.92) 123.02%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              textFillColor: "transparent",
            }}
          >
            {award}
          </p>
          <p className="text-xs text-gray-300">{date}</p>
          <p className="mt-4 text-xs text-white">{about}</p>

          <div className="mt-4 pb-1 flex flex-wrap">
            {tech.map((t) => {
              return (
                <span key={t} className="text-xs chip">
                  {t.name}
                </span>
              );
            })}
          </div>
          <a
            href={link}
            className="text-xs cursor-pointer relative text-sky-400 font-medium before:absolute before:-bottom-1 before:h-0.5 before:w-full before:origin-left before:scale-x-0 before:bg-sky-600 before:transition hover:before:scale-100"
          >
            {moreinfo}
          </a>
        </div>
      </a>
    );
  };
  return (
    <Layout>
      <Head>
        <title>Projects | Yanisa Poongthaisong</title>
      </Head>
      <section className="bg-[#070738]">
        <div className="mt-10 px-24 sm:px-36 lg:px-48">
          <BackNavigate />
        </div>
        <div className="bg-[#070738]">
          <h1 className="font-homemade text-3xl xl:pl-48 lg:text-7xl font-bold py-4 lg:py-12 text-center md:text-left">
            Projects
          </h1>
        </div>
        {/* Grid starts here */}
        <div className="bg-[#070738] justify-center xl:pl-24 xl:grid xl:grid-cols-2 lg:grid lg:grid-cols-2">
          <div className="items-center max-w-2xl">
            <div className="flex justify-center gap-1 mt-8 sm:gap-2">
              {list.map((item) => (
                <ProjectList
                  title={item.title}
                  active={selected === item.id}
                  setSelected={setSelected}
                  id={item.id}
                  key={item.id}
                />
              ))}
            </div>
          </div>
        </div>
        {/* Grid starts here */}
        <div className="bg-[#070738]">
          <div className="w-4/6 lg:w-full max-w-6xl pt-4 mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 pb-20">
            {data.map((p) => (
              <ProjectCard
                title={p.title}
                imgUrl={p.imgUrl}
                link={p.link}
                tool={p.tool}
                key={p.id}
                tech={p.tech}
                about={p.about}
                caption={p.caption}
                date={p.date}
                award={p.award}
                moreinfo={p.moreinfo}
                hoverText={p.hoverText}
              />
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
