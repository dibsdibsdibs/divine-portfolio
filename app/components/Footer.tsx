import { FaEnvelope, FaLinkedin, FaSquareFacebook} from "react-icons/fa6"; 

function Footer() {
    return (
      <div className="flex items-center justify-between p-5 bg-violet text-white font-raleway font-bold">
        <p>© Divine Grace Lavente</p>
        <div className="flex w-20 justify-between">
            <FaEnvelope />
            <FaLinkedin />
            <FaSquareFacebook />
        </div>
      </div>
    );
  }
  
export default Footer;