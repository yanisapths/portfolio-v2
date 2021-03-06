import React from 'react'
import Link from "next/link"
import { ArrowRightIcon} from '@heroicons/react/solid'
import { ExternalLinkIcon } from '@heroicons/react/solid'

function FeaturedProjects() {
    
  return (
    <section className="mx-8 lg:mx-5  md:mx-10 bg-[#070738]">
    <div className=" max-w-6xl mx-auto h-48 bg-[#070738]">
        <h1  className="flex text-emerald-400 text-5xl md:text-9xl font-bold  lg:py-20 xl:py-20 p-0 text-center md:text-left">
          Projects
        <Link href="/projects">
          <ArrowRightIcon className="flex lg:mt-14 lg:ml-10 md:mt-12 md:ml-10 lg:h-10 lg:w-10 md:w-14 md:h-14 h-5 w-5 ml-3 mt-4 -m-0 cursor-pointer transform hover:translate-x-2 transition duration-300" />
        </Link>
        </h1>
    </div>

    {/* Grid starts here */}
    <div className="bg-[#070738] justify-center align-center -mt-40 xl:mt-0 lg:mt-0 md:-mt-16">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 py-20 pb-40">
           
         
             {/* Single card */}
             <div
            className=" lg:w-full lg:h-5/6 flex flex-row col-span-3 shadow-2xl" 
          >
            <div className="lg:basis-1/3 basis-1/2 relative overflow-hidden">
              <img
                src="/asset/project-survey.png"
                alt="portfolio"
                className="transform hover:scale-125 transition duration-2000 ease-out"
              />
              <Link  href="/projects/oliveplatform"  >
                <h3 className="absolute top-10 left-5 text-indigo-400 font-bold lg:text-xl md:text-xl bg-white shadow-2xl shadow-white border-2 rounded-full lg:px-4 lg:py-3 px-2 md:px-4 md:py-3 hover:bg-black/50 hover:border-2 hover:text-white cursor-pointer">
                    See Process 
                </h3>
              </Link>
              <h1 className=" absolute bottom-10 left-10 text-gray-50 font-bold text-xl">
                on going
              </h1>
            </div>
            <div className="lg:basis-2/3 basis-1/2 ">
            <p className="m-5 lg:mt-20 lg:ml-14 text-white text-lg lg:text-4xl  md:text-4xl md:mt-20 md:ml-14">
               Platform App
              </p>
              <p className="m-5 lg:m-14 lg:text-lg md:text-xl md:m-14  text-white text-xs">
                Design a system to help the elders and family to browse local care places with difficulties when no one is around with them. 
              </p>
              <h1 className="pr-6 text-indigo-500 text-sm w-full justify-center p-2 text-right">
                  Next.js ??? Firebase ??? Tailwind CSS
              </h1>
            </div>
          </div>
            {/* Single card */}
            <div
            className="  lg:w-full lg:-mt-12 flex flex-row  col-span-3 shadow-2xl"
          >
            <div className="lg:basis-1/3 basis-1/2 relative overflow-hidden">
              <img
                src="/asset/SE-design.png"
                alt="portfolio"
                className="scale-125 transform hover:scale-150 transition duration-2000 ease-out"
              />
              <a  href="https://www.figma.com/file/eJhWs89I5BQ3AkD410qrKl/poisssonUI" >
                <h3 className="absolute top-10 left-5 text-[#ffffff] font-bold lg:text-xl  md:text-xl bg-black/50 shadow-2xl shadow-white border-2 rounded-full lg:px-4 lg:py-3 px-2 md:px-4 md:py-3 hover:bg-[#ffffff] hover:border-2 hover:text-indigo-400">
                   View on Figma
                <ExternalLinkIcon className="inline-flex h- w-7 pl-2 mb-2 cursor-pointer transform " />
                </h3>
              </a>
            </div>
            <div className="lg:basis-2/3 basis-1/2 ">
            <p className="m-5 lg:mt-20 lg:ml-14 text-white text-lg lg:text-4xl md:text-4xl md:mt-20 md:ml-14 ">
              UI Design
              </p>
              <p className="m-5 lg:m-14 lg:text-lg md:text-xl  md:m-14 text-white text-xs ">
               Designed, wireframing, and prototyping with Figma for daily-poisson web app.
              </p>
              <h1 className="pr-6 text-indigo-500 text-sm w-full justify-center pt-16 text-right lg:pt-24">
                    Figma
              </h1>
            </div>
          </div>
             {/* Single card */}
             <div
            className="w-full lg:mt-12 lg:flex  flex-row  col-span-3 shadow-2xl"
          >
            <div className="basis-1/2 relative overflow-hidden">
              <img
                src="/asset/discord-bot.png"
                alt="portfolio"
                className="transform hover:scale-125 transition duration-2000 ease-out"
              />
              <a href="https://python.plainenglish.io/build-discord-quizbot-with-python-and-deploy-1-44dec1250a37">
                  <h3  className="cursor-pointer absolute top-10 left-5 text-[#ffffff] font-bold lg:text-xl  md:text-xl bg-black/50 shadow-2xl shadow-white border-2 rounded-full lg:px-6 lg:py-3 px-2 md:px-4 md:py-3  hover:bg-[#ffffff] hover:border-2 hover:text-indigo-400">
                  Read on Medium
                  <ExternalLinkIcon className="inline-flex h- w-7 pl-2 mb-2 cursor-pointer transform " />
                  </h3>
              </a>
            </div>
            <div className=" basis-1/2">
              <p className="m-5  lg:ml-14 text-white text-lg lg:text-4xl  md:text-4xl md:mt-20 md:ml-14">
              Discord Quiz Bot
              </p>
              <p className="m-5 lg:m-14 lg:text-lg md:text-xl md:m-14 text-white text-xs">
                Developed discord bot for helping with learning using Python on Django API framework, deploy on Heroku.
              </p>
              <h1 className="pr-6 text-indigo-500 text-sm w-full justify-center p-4 text-right lg:pb-8">
              Django DRF ??? Python ??? Heroku
              </h1>
            </div>
          </div>
      </div>
    </div>
  </section>
  )
}

export default FeaturedProjects;

// const ProjectCard = ( {title , imgUrl , number} ) => {
//     return (
//         <div className="relative overflow-hidden">
//           <div className="h-72 object-cover">
//             <img
//               src={imgUrl}
//               alt="portfolio"
//               className="transform hover:scale-125 transition duration-2000 ease-out object-cover"
//               width='54' height='54' 
//             />
//           </div>
//           <h1 className="absolute top-10 left-10 text-gray-50 font-bold text-xl bg-red-500 rounded-md px-2">
//             {title}
//           </h1>
//           <h1 className="absolute bottom-10 left-10 text-gray-50 font-bold text-xl">
//             {number.length === 1 ? "0" + number : number}
//           </h1>
//         </div>
      
//     );
// };