import data from "../data/data";
import React from 'react'

function Projects() {
    
    const ProjectCard = ( {title , imgUrl} ) => {
        return (
            <div className="relative overflow-hidden">
              <div className="h-72 object-cover">
                <img
                  src={imgUrl}
                  alt="portfolio"
                  className="transform hover:scale-125 transition duration-2000 ease-out object-cover"
                />
              </div>
              <h1 className="absolute top-10 left-10 text-white font-bold text-xl bg-black/40 border-2 hover:bg-white hover:text-indigo-400 shadow-white shadow-2xl rounded-full px-4 py-3 ">
                {title}
              </h1>
            </div>
          
        );
    };
  return (
    <section className=" mx-8 bg-[#070738]">
    <div className="max-w-6xl mx-auto h-48 bg-[#070738]">
      <h1 className="text-indigo-400 text-5xl md:text-9xl font-bold py-20 text-center md:text-left">
        Projects
      </h1>
    </div>
    {/* Grid starts here */}
    <div className="bg-[#070738]">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 py-20 pb-40">
        {data.projects?.map((proj, idx) => (
          <ProjectCard
            title={proj.title}
            imgUrl={proj.imgUrl}
          />
        ))}
      </div>
    </div>
  </section>
  )
}

export default Projects;