import React from "react";
import Image from "next/image";
import MailOutlineIcon from "@mui/icons-material/MailOutline";

function Intro() {
  const Mailto = ({ email, subject = "", body = "", children }) => {
    let params = subject || body ? "?" : "";
    if (subject) params += `subject=${encodeURIComponent(subject)}`;
    if (body) params += `${subject ? "&" : ""}body=${encodeURIComponent(body)}`;

    return <a href={`mailto:${email}${params}`}>{children}</a>;
  };
  return (
    <div className="items-center max-w-2xl">
      <div className="items-center text-gray-100 text-sm">
        <p className="text-2xl font-bold">Yanisa Poongthaisong</p>
        <p className="text-md text-gray-400">Thailand</p>
      </div>

      <div className="text-gray-100 text-sm gap-4">
        <h2 className="mt-6 text-xl text-white font-extrabold">EDUCATION</h2>
        {/* education */}
        <div className="py-4">
          <p className="text-gray-400 mt-3">2019 - 2023</p>
          <p>2nd Class Hornour GPA 3.46</p>
          <p>B.Eng in Information Systems and Network Engineering</p>

          <h3 className="text-indigo-300 text-md font-bold">
            Chiang Mai University
          </h3>
        </div>
        {/* Work */}
        <h2 className="mt-6 text-xl text-white font-extrabold">EXPERIENCE</h2>
        <div className="py-4 mt-4 flex items-center gap-8">
          <Image src="/logo/acn.png" width={50} height={50} />
          <div>
            <p className="text-gray-400">Jun - Nov 2022 | Internship</p>
            <p className="gap-2">
              Mobile Developer{" "}
              <span className="font-light text-xs text-gray-300">
                (Flutter, Native Android)
              </span>
            </p>

            <h3 className="text-indigo-300 text-lg font-bold">
              Accenture{" "}
              <span className="font-light text-xs text-gray-300">
                (Bangkok, Thailand)
              </span>
            </h3>
          </div>
        </div>

        <div className="mt-6 py-4 flex items-center gap-8">
          <Image src="/logo/techx.png" width={50} height={50} />
          <div>
            <p className="text-gray-400">Apr - May 2022 | Internship</p>
            <p>
              Web Developer{" "}
              <span className="font-light text-xs text-gray-300">
                (React, Redux Tool Kit, Figma)
              </span>
            </p>

            <h3 className="text-indigo-300 text-lg font-bold">
              SCB Tech X{" "}
              <span className="font-light text-xs text-gray-300">
                (Bangkok, Thailand)
              </span>
            </h3>
          </div>
        </div>
        <div>
          <Mailto
            email="yanisa21@live.com"
            subject="References Request"
            body="I'd like a reference from company ..."
          >
            <p className="text-sky-400 text-[10px] hover:underline">
            Request References
            </p>
          </Mailto>
        </div>
      </div>
      {/* skills */}
      <h2 className="mt-6 text-xl text-white font-extrabold">SKILLS</h2>
      <div className="py-4 md:p-6">
        <div className="flex py-4 gap-4 md:gap-10 items-center">
          <p className="text-sm md:text-xl basis-1/3 text-gray-400 font-bold">
            Languages
          </p>
          <h3 className="basis-2/3 text-sm text-white">
            JavaScript, Python, CSS/HTML, Solidity
          </h3>
        </div>

        <div className="flex py-4 gap-4 md:gap-10 items-center">
          <p className="text-sm md:text-xl basis-1/3 text-gray-400 font-bold">
            Design
          </p>
          <h3 className="basis-2/3 text-sm text-white">Figma</h3>
        </div>
        <div className="flex py-4 gap-4 md:gap-10 items-center">
          <p className="text-sm md:text-xl basis-1/3 text-gray-400 font-bold">
            Protocols
          </p>
          <h3 className="basis-2/3 text-sm text-white">XML REST JSON</h3>
        </div>

        <div className="flex py-4 gap-4 md:gap-10 items-center">
          <p className="text-sm md:text-xl basis-1/3 text-gray-400 font-bold">
            Frameworks
          </p>
          <h3 className="basis-2/3 text-sm text-white">
            ExpressJs, ReactJs, NextJs, NodeJs, Django, Git, Vercel, Flutter,
            Firebase, Docker, GCP, AWS, Linux, Ubuntu
          </h3>
        </div>
      </div>
    </div>
  );
}

export default Intro;
