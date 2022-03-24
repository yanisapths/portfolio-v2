import data from "../data/data";
import React from 'react'

function FeaturedProjects() {
    
    
  return (
    <section className="bg-white dark:bg-gray-800">
    <div className="max-w-6xl mx-auto h-48 bg-white dark:bg-gray-800">
      <h1 className=" text-5xl md:text-9xl font-bold py-20 text-center md:text-left">
        Projects
      </h1>
    </div>
    {/* Grid starts here */}
    <div className="bg-[#F1F1F1] dark:bg-gray-900">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 py-20 pb-40">
           {/* Single card */}
           <a
            href="https://daily-poisson.vercel.app"
            className="w-full block col-span-3 shadow-2xl"
          >
            <div className="relative overflow-hidden">
              <img
                src="/asset/SE-design.png"
                alt="portfolio"
                className="transform hover:scale-125 transition duration-2000 ease-out"
                width='50%' height='40%'
              />
              <h1 className="absolute top-10 left-10 text-gray-50 font-bold text-xl bg-red-500 rounded-md px-2">
               Software Engineer
              </h1>
              <h1 className="absolute bottom-10 left-10 text-gray-50 font-bold text-xl">
                01
              </h1>
            </div>
          </a>
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