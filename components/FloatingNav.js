import React from "react";
import Link from "next/link";

function FloatingNav({ handleScroll }) {
  return (
    <div className="invisible md:visible fixed text-left left-3 bottom-6 md:bottom-8 md:left-8">
      <div className="font-bold text-lg space-y-3">
      <div className="hover:scale-95 hover:text-gray-300 text-indigo-500 cursor-pointer">
        <Link href="#section-1" onClick={handleScroll}>
          About
        </Link>
      </div>
      <div className="hover:scale-95 hover:text-gray-300 text-indigo-500 cursor-pointer">
        <Link href="#section-3" onClick={handleScroll}>
          Projects
        </Link>
      </div>
      <div className="hover:scale-95 hover:text-gray-300 text-indigo-500 cursor-pointer">
        <Link href="#section-5" onClick={handleScroll}>
          Contact
        </Link>
      </div>

      </div>
    </div>
  );
}

export default FloatingNav;
