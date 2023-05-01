import React from "react";
import Link from "next/link";
import ArrowLeftIcon from "@mui/icons-material/ArrowLeft";

function BackNavigate({light}) {
  return (
    <Link href="/">
      <div className={light == true ? "flex gap-1 text-md font-bold items-center text-indigo-400 cursor-pointer transition transform hover:-translate-x-1 hover:-translate-y-1 hover:text-indigo-600 group-active:text-indigo-600" : "flex gap-1 text-md font-bold items-center text-white cursor-pointer transition transform hover:-translate-x-1 hover:-translate-y-1 hover:text-indigo-400 group-active:text-indigo-400"}>
        <ArrowLeftIcon  />
        <p>Back</p>
      </div>
    </Link>
  );
}

export default BackNavigate;
