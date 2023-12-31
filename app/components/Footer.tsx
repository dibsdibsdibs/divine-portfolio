import { FaEnvelope, FaLinkedin, FaGithub} from "react-icons/fa6"; 

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
          <a href={`${"mailto:"} ${about.email}`}>
            <FaEnvelope />
          </a>
          <a href={about.linkedin}>
            <FaLinkedin />
          </a>
          <a href={about.github}>
            <FaGithub />
          </a>
        </div>
      </div>
    );
  }
  
export default Footer;