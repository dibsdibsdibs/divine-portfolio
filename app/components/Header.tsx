'use client'
import Link from 'next/link';
import { FaBars } from "react-icons/fa6";
import { useState } from 'react';
import { motion } from "framer-motion";

function Header() {
  const [showMenu, setToggleMenu] = useState(false)

  const HandleMenuToggle = () => {
    setToggleMenu(!showMenu)
  }

  return (
    <div className="sticky top-0 flex flex-wrap items-center justify-between p-5 bg-violet text-white z-50">
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <Link
          className="font-mango text-2xl cursor-default"
          href = "/"
        >
          Divine
        </Link>
      </motion.button>
      <div className="block lg:hidden">
        <button className="flex items-center px-3 py-2 border rounded text-white border-white">
          <FaBars onClick={HandleMenuToggle} />
        </button>
      </div>
      <div className={`${"font-bold lg:flex lg:justify-between lg:w-1/4"} ${showMenu === true ? 'w-full block' : 'hidden' }`}>
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <Link 
            href="../stack"
            className='block mt-4 lg:inline-block lg:mt-0 mr-4'
            onClick={HandleMenuToggle}
          >
            Stack
          </Link>
        </motion.button>
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <Link 
            href="../experience"
            className='block mt-4 lg:inline-block lg:mt-0 mr-4'
            onClick={HandleMenuToggle}
            >
            Experience
          </Link>
        </motion.button>
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <Link
            href="../projects"
            className='block mt-4 lg:inline-block lg:mt-0 mr-4'
            onClick={HandleMenuToggle}
          >
            Projects
          </Link>
        </motion.button>
      </div>
    </div>
    );
  }
  
export default Header;