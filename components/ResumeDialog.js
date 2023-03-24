import React from "react";
import Image from "next/image";
import Dialog from "@mui/material/Dialog";
import { DownloadIcon } from "@heroicons/react/solid";
import data from "../data/data";

function ResumeDialog({ open, handleClose }) {
  return (
    <Dialog onClose={handleClose} open={open}>
      <Image

        src="/asset/resume.png"
        width={900}
        height={1400}
        objectFit="contain"
      />
      <a
        href={data.user.resume}
        className="inline-flex bg-black/40 mx-8 justify-center  border-2 mt-8 cursor-pointer transform hover:translate-x-2 transition duration-300 shadow-white shadow-lg rounded-full lg:px-2 lg:py-3  xl:px-2 xl:py-3 py-2 hover:bg-[#ffffff] hover:border-2 hover:text-indigo-400"
      >
        <DownloadIcon className="lg:h-6 lg:w-6 md:h-6 md:w-6 sm:h-2 sm:w-2 h-6 w-6" />
        <h4 className="lg:text-lg xl:text-lg text-md font-bold pl-2 ">
          Download
        </h4>
      </a>
    </Dialog>
  );
}

export default ResumeDialog;
