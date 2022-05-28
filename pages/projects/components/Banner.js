import React from 'react';
import Image from 'next/image';
import { ExternalLinkIcon } from '@heroicons/react/solid'
import Link from 'next/link';

function Banner(props) {
  return (
    <div className="relative h-[300px] sm:h-[400px] lg:h-[500px] xl:h-[600] 2xl:h-[700px] font-noto ">
          <Image  src={props.src}
           layout="fill"
           objectFit="cover"
           className="opacity-30"
           />
           <div className="absolute top-1/4 md:top-1/3 w-full text-center">
             <p className="text-white text-3xl md:text-5xl  font-black shadow-4xl opacity-100 p-3">{props.title}</p>
           </div>
    </div>
  )
}

export default Banner