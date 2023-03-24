import React from "react";
import Image from "next/image";
import Dialog from "@mui/material/Dialog";
import { DownloadIcon } from "@heroicons/react/solid";
import data from "../data/data";

function ResumeDialog({ open, handleClose }) {
  return (
    <Dialog onClose={handleClose} open={open}>
      <div className="bg-black overflow-hidden">
        <Image
          src="/asset/resume.png"
          width={1100}
          height={1600}
          objectFit="cover"
          className="opacity-80 hover:opacity-100"
        />
        <div className="absolute top-2/4 w-full text-center">
          <a
            href={data.user.resume}
            className="inline-flex text-white bg-indigo-400 justify-center border-2 cursor-pointer shadow-white shadow-lg rounded-full px-4 py-2 md:px-12 md:p-4 hover:bg-[#ffffff] hover:border-2 hover:text-indigo-400"
          >
            <DownloadIcon className="h-6 w-6" />
            <h4 className="text-md font-bold pl-2">Download</h4>
          </a>
        </div>
      </div>
    </Dialog>
  );
}

export default ResumeDialog;
