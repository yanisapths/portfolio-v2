import React from "react";
import Link from "next/link";

function IndexContent({ handleScroll }) {
  return (
    <div className="fixed top-60 pt-12 text-left">
      <div className="font-bold text-lg space-y-3">
        <div className="hover:scale-95 hover:text-gray-300 text-indigo-500 cursor-pointer">
          <Link href="#section-0" onClick={handleScroll}>
            Overview
          </Link>
        </div>
        <div className="hover:scale-95 hover:text-gray-300 text-indigo-500 cursor-pointer">
          <Link href="#section-1" onClick={handleScroll}>
            Process
          </Link>
        </div>
        <div className="hover:scale-95 hover:text-gray-300 text-indigo-500 cursor-pointer">
          <Link href="#section-2" onClick={handleScroll}>
            Customer Application
          </Link>
        </div>
        <div className="hover:scale-95 hover:text-gray-300 text-indigo-500 cursor-pointer">
          <Link href="#section-3" onClick={handleScroll}>
            Clinic Management
          </Link>
        </div>
        <div className="hover:scale-95 hover:text-gray-300 text-indigo-500 cursor-pointer">
          <Link href="#section-6" onClick={handleScroll}>
            Media
          </Link>
        </div>
      </div>
    </div>
  );
}

export default IndexContent;
