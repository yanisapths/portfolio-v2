/*  ./components/Navbar.jsx     */
import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

function  Navbar() {
  const [active, setActive] = useState(false);
  
  const handleClick = () => {
    setActive(!active);
  };

  return (
    <nav className="sticky flex items-center justify-between flex-wrap p-6 top-0 z-40  backdrop-blur flex-none transition-colors duration-500 lg:z-50 lg:border-b lg:border-slate-900/10 dark:border-slate-50/[0.06]  supports-backdrop-blur:bg-white/60 dark:bg-transparent shadow-lg shadow-indigo-800">
      <div className="flex items-center flex-shrink-0 text-white">
        <Image src='/logo.png' width='54' height='54' />
      </div>
  <button
          className=' inline-flex p-3 hover:bg-gray-100 rounded lg:hidden text-white ml-auto hover:text-white outline-none'
          onClick={handleClick}
        >
          <svg
            className='w-6 h-6'
            fill='none'
            stroke='currentColor'
            viewBox='0 0 24 24'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth={2}
              d='M4 6h16M4 12h16M4 18h16'
            />
          </svg>
        </button>
        {/*Note that in this div we will use a ternary operator to decide whether or not to display the content of the div  */}
        <div
          className={`${
            active ? '' : 'hidden'
          }   w-full lg:inline-flex lg:flex-grow lg:w-auto pt-4 text-center`}
        >
          <div className='lg:inline-flex lg:flex-row lg:ml-auto lg:w-auto w-full lg:items-center items-start  flex flex-col lg:h-auto  transition transform duration-200 ease-out'>
            <Link href='/'>
              <a className='lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-white font-bold text-xl items-center justify-center hover:text-indigo-400  hover:font-extrabold transition transform duration-300 ease-out'>
                About
              </a>
            </Link>
            <Link href='/'>
              <a className='lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-white font-bold  text-xl items-center justify-center hover:text-sky-400 hover:font-extrabold transition transform duration-300 ease-out'>
                Experience
              </a>
            </Link>
            <Link href='/projects'>
              <a className='lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-white font-bold  text-xl items-center justify-center  hover:text-emerald-400  hover:font-extrabold transition transform duration-300 ease-out'>
              Projects
              </a>
            </Link>
            <Link href='/'>
              <a className='lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-white font-bold  text-xl items-center justify-center  hover:text-lime-400  hover:font-extrabold transition transform duration-300 ease-out'>
                Contact
              </a>
            </Link>
          </div>
        </div>
</nav>
  )
}

export default Navbar