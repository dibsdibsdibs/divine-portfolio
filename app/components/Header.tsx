'use client'
import Link from 'next/link';
import { FaBars } from "react-icons/fa6";
import { useState } from 'react';

function Header() {
  const [showMenu, setToggleMenu] = useState(false)

  const HandleMenuToggle = () => {
    setToggleMenu(!showMenu)
  }

  return (
    <div className="sticky top-0 flex flex-wrap items-center justify-between p-5 bg-violet text-white z-50">
      <p className="font-mango text-2xl">Divine</p>
      <div className="block lg:hidden">
        <button className="flex items-center px-3 py-2 border rounded text-white border-white">
          <FaBars onClick={HandleMenuToggle} />
        </button>
      </div>
      <div className={`${"font-bold lg:flex lg:justify-between lg:w-1/4"} ${showMenu === true ? 'w-full block' : 'hidden' }`}>
        <Link 
          href="/"
          className='block mt-4 lg:inline-block lg:mt-0 mr-4'
          onClick={HandleMenuToggle}
        >
          Home
        </Link>
        <Link 
          href="../experience"
          className='block mt-4 lg:inline-block lg:mt-0 mr-4'
          onClick={HandleMenuToggle}
          >
          Experience
        </Link>
        <Link
          href="../projects"
          className='block mt-4 lg:inline-block lg:mt-0 mr-4'
          onClick={HandleMenuToggle}
        >
          Projects
        </Link>
      </div>
    </div>
    );
  }
  
export default Header;