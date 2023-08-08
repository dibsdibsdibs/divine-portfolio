import { FaEnvelope, FaLinkedin} from "react-icons/fa6"; 

function Footer() {
    return (
      <div className="Footer">
        <p>© Divine Grace Lavente</p>
        <div className="Footer-socmeds">
            <FaEnvelope />
            <FaLinkedin />
        </div>
      </div>
    );
  }
  
export default Footer;