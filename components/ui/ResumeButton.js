import React from "react";
import { DownloadIcon } from "@heroicons/react/solid";
import data from "../../data/data";

const ResumeButton = ({ handleOpen }) => {
  return (
    <div
      onClick={handleOpen}
      className="cursor-pointer fixed text-center bottom-5 right-5"
    >
      <div className="rounded-full bg-indigo-600 px-8 py-3 text-white">
        <span className="text-sm font-medium transition-opacity">
          Resume
        </span>
      </div>
    </div>
  );
};

export default ResumeButton;
