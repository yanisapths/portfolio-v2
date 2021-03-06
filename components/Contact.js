import React from 'react'
import data from "../data/data";
import Image from "next/image";

function Contact() {
  const Mailto = ({ email, subject = '', body = '', children }) => {
    let params = subject || body ? '?' : '';
    if (subject) params += `subject=${encodeURIComponent(subject)}`;
    if (body) params += `${subject ? '&' : ''}body=${encodeURIComponent(body)}`;
  
    return <a href={`mailto:${email}${params}`}>{children}</a>;
  };
  return (
    <section className=" mx-8 bg-[#070738] ">
    <div className="max-w-6xl mx-auto h-48 bg-[#070738]">
      <h1 className="lg:pl-8 xl:pl-0 text-lime-400 text-5xl md:text-9xl font-bold py-20 text-center md:text-left">
        Contact
      </h1>
      <div className="flex flex-row">
      <div className="absolute lg:hidden xl:hidden -mt-28 pl-24 sm:hidden ">
              <Image src="/asset/hi2.png" width={500} height={900} className=" "/>
          </div>
        <div className="basis-1/3">
          {/* Medium */}
        <div className="lg:pl-10 ">
            <a
            href={data.socialLinks.medium}
            className="inline-flex bg-black/40 w-60 ml-10 lg:ml-0 xl:ml-0 lg:w-80 xl:w-80 justify-center  border-2 mt-8 cursor-pointer transform hover:translate-x-2 transition duration-300 shadow-white shadow-lg rounded-full px-7 py-2 lg:py-3 xl:py-3  hover:bg-[#ffffff] hover:border-2 hover:text-indigo-400"
            >
            <svg width="24" height="24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" fillRule="evenodd" clipRule="evenodd"><path d="M24 24h-24v-24h24v24zm-4.03-5.649v-.269l-1.247-1.224c-.11-.084-.165-.222-.142-.359v-8.998c-.023-.137.032-.275.142-.359l1.277-1.224v-.269h-4.422l-3.152 7.863-3.586-7.863h-4.638v.269l1.494 1.799c.146.133.221.327.201.523v7.072c.044.255-.037.516-.216.702l-1.681 2.038v.269h4.766v-.269l-1.681-2.038c-.181-.186-.266-.445-.232-.702v-6.116l4.183 9.125h.486l3.593-9.125v7.273c0 .194 0 .232-.127.359l-1.292 1.254v.269h6.274z"/></svg>
            <h4 className="text-lg font-bold pl-2 ">Blog</h4>
            </a>
        </div>
        {/* GitHUb */}
        <div className="lg:pl-10">
            <a
            href={data.socialLinks.github}
            className="inline-flex bg-black/40 w-60 ml-10 lg:ml-0 xl:ml-0 lg:w-80 xl:w-80 justify-center  border-2 mt-8 cursor-pointer transform hover:translate-x-2 transition duration-300 shadow-white shadow-lg rounded-full px-7 py-2 lg:py-3 xl:py-3  hover:bg-[#ffffff] hover:border-2 hover:text-indigo-400"
            >
          <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" width="24" height="24" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
            <h4 className="text-lg font-bold pl-2 ">Code</h4>
            </a>
        </div>
        {/* Linkedin */}
        <div className="lg:pl-10">
            <a
            href={data.socialLinks.linkedin}
            className="inline-flex bg-black/40 w-60 ml-10 lg:ml-0 xl:ml-0 lg:w-80 xl:w-80 justify-center  border-2 mt-8 cursor-pointer transform hover:translate-x-2 transition duration-300 shadow-white shadow-lg rounded-full px-7 py-2 lg:py-3 xl:py-3 hover:bg-[#ffffff] hover:border-2 hover:text-indigo-400"
            >
          <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor"  width="24" height="24" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
            <h4 className="text-lg font-bold pl-2 ">Linkedin</h4>
            </a>
        </div>
    <div className="border-2 bg-black/40 pl-3 w-60  xl:pl-18 lg:pl-18 ml-10  md:w-60 lg:w-80 xl:w-80  justify-center  mt-8 cursor-pointer transform hover:translate-x-2 transition duration-300 shadow-white shadow-lg rounded-full px-0 lg:px-12 xl:px-12 py-1 lg:py-2 xl:py-2 hover:bg-[#ffffff] hover:border-2 hover:text-indigo-400"
       
       >
           <Mailto email="yanisa21@live.com" subject="Hello Yanisa!" body="">
                   <h4 className="text-lg font-bold p-2">???? yanisa21@live.com</h4>
           </Mailto>
       </div>
        </div>
        <div className=" md:relative lg:relative xl:relative xl:basis-2/3 lg:basis-2/3 pl-60 lg:-mt-60 xl:pl-80 xl:-mt-80 md:pl-36 md:-mt-52 ">
              <Image src="/asset/hi2.png" width={500} height={900} className=" "/>
          </div>
      </div>
   
  
    </div>
    </section>
  )
}

export default Contact