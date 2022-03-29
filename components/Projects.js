import React,{useState,useEffect} from 'react'
import ProjectList from "./ProjectList";
import  {
  All,
  design,
  dev,
  bot,
} from "../data/proj"


function Projects () {

  const [selected, setSelected] = useState("projects");
  const [data, setData] = useState([]);
  const list = [
    {
      id: "all",
      title: "All",
    },
    {
      id: "design",
      title: "UX/UI Design",
    },
    {
      id: "dev",
      title: "Development"
    },
    {
      id: "bot",
      title: "Bot"
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
         break;

      default:
        setData(All);
    }
  }, [selected]);

    const ProjectCard = ( {title , imgUrl , link , id, type,tool} ) => {
        return (
          <a href={link} id={id} type={type} className="w-full block shadow-2xl">
            <div  className="relative overflow-hidden">
              <div className="h-72 object-cover">
                <img
                  src={imgUrl}
                  alt="portfolio"
                  className="transform hover:scale-125 transition duration-2000 ease-out object-cover"
                />
              </div>
                 {/* <h1 className=" absolute bottom-5 left-5 text-white  text-sm bg-black/50 w-[90%] justify-center p-2 text-center rounded-full">
                     {tool}
                  </h1> */}
              <h1 className="absolute top-10 left-10 text-white font-bold text-xl bg-black/40 border-2 hover:bg-white hover:text-indigo-400 shadow-white shadow-2xl rounded-full px-4 py-3 ">
                {title}
              </h1>
            </div>
            <h1 className="  bottom-5 left-5 text-indigo-500 bg-black/10  text-sm w-full justify-center p-2 text-right">
                     {tool}
              </h1>
          </a>
          
        );
    };
  return (
    <section className=" mx-8 bg-[#070738]">
    <div className="max-w-6xl mx-auto h-48 bg-[#070738]">
      <h1 className="text-emerald-400 text-5xl md:text-9xl font-bold py-20 text-center md:text-left">
        Projects
      </h1>
        <div className="grid grid-cols-1 -mt-12 ">
          <h4 className="my-3 text-lg  md:text-2xl font-bold">Filter by Type</h4>
          <div className="flex md:mt-3 lg:mt-3  ">
            {list.map((item) => (
              <ProjectList title={item.title}
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
        <div className="bg-[#070738] mt-4 lg:mt-36 md:mt-36">
            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 py-20 pb-40">
                {data.map( (proj) => (
                    <ProjectCard
                    title={proj.title}
                    imgUrl={proj.imgUrl}
                    link={proj.link}
                    tool={proj.tool}
                    key={proj.id}
                    />
                ))}
            </div>
        </div>
  </section>
  )
}

export default Projects;