"use client";
import { FaEnvelope, FaLinkedin, FaGithub} from "react-icons/fa6";
import { motion } from "framer-motion";

function Footer() {
  const about={
    email: 'divinelavente@gmail.com',
    linkedin: 'https://www.linkedin.com/in/divinelavente/',
    github: 'https://github.com/dibsdibsdibs',
  };

    return (
      <div className="mt-auto w-full flex items-center justify-between p-5 bg-violet text-white font-raleway font-bold">
        <p>© Divine Grace Lavente</p>
        <div className="flex w-20 justify-between">
          <motion.button
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
          >
            <a href={`${"mailto:"} ${about.email}`}>
              <FaEnvelope />
            </a>
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
          >
            <a href={about.linkedin}>
              <FaLinkedin />
            </a>
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
          >
            <a href={about.github}>
              <FaGithub />
            </a>
          </motion.button>
        </div>
      </div>
    );
  }
  
export default Footer;