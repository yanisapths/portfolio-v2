import React from 'react'
import Link from "next/link"
import { ArrowRightIcon} from '@heroicons/react/solid'

function FeaturedProjects() {
    
  return (
    <section className="mx-3 lg:mx-5  bg-[#070738]">
    <div className=" max-w-6xl mx-auto h-48 bg-[#070738]">
        <h1  className="flex text-emerald-400 text-5xl md:text-9xl font-bold lg:py-20 xl:py-20 p-0 text-center md:text-left">
          Projects
        <Link href="/projects">
          <ArrowRightIcon className="flex lg:mt-14 lg:ml-10 lg:h-10 lg:w-10 h-5 w-5 ml-3 mt-4 -m-0 cursor-pointer transform hover:translate-x-2 transition duration-300" />
        </Link>
        </h1>
    </div>

    {/* Grid starts here */}
    <div className="bg-[#070738] justify-center align-center -mt-40 xl:mt-0 lg:mt-0">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 py-20 pb-40">
           {/* Single card */}
           <div
            className="lg:w-full lg:h-5/6  flex flex-row  col-span-3 shadow-2xl"
          >
            <div className="lg:basis-1/3 basis-1/2 relative overflow-hidden">
              <img
                src="/asset/SE-design.png"
                alt="portfolio"
                className="scale-125 transform hover:scale-150 transition duration-2000 ease-out"
              />
              <a  href="https://daily-poisson.vercel.app" >
                <h3 className="absolute top-10 left-5 text-[#ffffff] font-bold lg:text-xl bg-black/50 shadow-2xl shadow-white border-2 rounded-full lg:px-4 lg:py-3 px-2 hover:bg-[#ffffff] hover:border-2 hover:text-indigo-400">
                    Daily poisson
                </h3>
              </a>
            </div>
            <div className="lg:basis-2/3 basis-1/2 ">
            <p className="m-5 lg:mt-20 lg:ml-14 text-white text-lg lg:text-4xl ">
              UI Design
              </p>
              <p className="m-5 lg:m-14 lg:text-lg text-white text-xs ">
               Designed, wireframing, and prototyping with Figma for daily-poisson web app.
              </p>
            </div>
          </div>
             {/* Single card */}
             <div
            className=" lg:w-full lg:-mt-12 flex flex-row col-span-3 shadow-2xl" 
          >
            <div className="lg:basis-1/3 basis-1/2 relative overflow-hidden">
              <img
                src="/asset/project-survey.png"
                alt="portfolio"
                className="transform hover:scale-125 transition duration-2000 ease-out"
              />
              <a  href="https://o-live.vercel.app"  >
                <h3 className="absolute top-10 left-5 text-[#ffffff] font-bold lg:text-xl bg-black/50 shadow-2xl shadow-white border-2 rounded-full lg:px-4 lg:py-3 px-2 hover:bg-[#ffffff] hover:border-2 hover:text-indigo-400">
                    Olive Platform
                </h3>
              </a>
              <h1 className=" absolute bottom-10 left-10 text-gray-50 font-bold text-xl">
                on going
              </h1>
            </div>
            <div className="lg:basis-2/3 basis-1/2 ">
            <p className="m-5 lg:mt-20 lg:ml-14 text-white text-lg lg:text-4xl">
               Platform App
              </p>
              <p className="m-5 lg:m-14 lg:text-lg text-white text-xs">
                Design a system to help the elders and family to browse local care places with difficulties when no one is around with them. 
              </p>
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
                  <h3  className="cursor-pointer absolute top-10 left-5 text-[#ffffff] font-bold lg:text-xl bg-black/50 shadow-2xl shadow-white border-2 rounded-full lg:px-4 lg:py-3 px-2 hover:bg-[#ffffff] hover:border-2 hover:text-indigo-400">
                      Just for fun
                  </h3>
              </a>
            </div>
            <div className=" basis-1/2">
              <p className="m-5  lg:ml-14 text-white text-lg lg:text-4xl">
              Discord Quiz Bot
              </p>
              <p className="m-5 lg:m-14 lg:text-lg text-white text-xs">
                Developed discord bot for helping with learning using Python on Django API framework, deploy on Heroku.
              </p>
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