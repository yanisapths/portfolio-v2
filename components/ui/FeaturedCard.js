import React from "react";
import Image from "next/image";

function FeaturedCard({ title, about, date, award, tech, pic, link }) {
  return (
    <div className="rounded-lg shadow-lg p-6 max-w-2xl mx-auto">
      <div className="relative h-48 w-full">
        <Image
          alt="Mountains"
          src="/asset/SE-design.png"
          layout="fill"
          objectFit="cover"
          className="rounded-lg"
        />
      </div>
      <div className="mt-6">
        <h2 className="text-xl font-bold text-white">Glassmorphism Card</h2>
        <p className="text-sm text-gray-300">April 21, 2023</p>
        <p className="mt-4 text-white">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi ac
          justo tincidunt, tristique elit sit amet, porta libero. Nam in
          hendrerit odio.
        </p>
        <div className="mt-4 flex flex-wrap">
          <span className="bg-purple-600 text-white py-1 px-2 rounded-full text-xs mr-2 mb-2">
            React
          </span>
          <span className="bg-purple-600 text-white py-1 px-2 rounded-full text-xs mr-2 mb-2">
            Next.js
          </span>
          <span className="bg-purple-600 text-white py-1 px-2 rounded-full text-xs mr-2 mb-2">
            Tailwind CSS
          </span>
        </div>
      </div>
    </div>
  );
}

export default FeaturedCard;
