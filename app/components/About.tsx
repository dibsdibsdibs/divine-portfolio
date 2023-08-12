import { FaEnvelope, FaLinkedin, FaSquareFacebook} from "react-icons/fa6"; 

export default function About({about}: any){

    return(
        <div className="text-center px-16 py-10 text-violet">
            <h1 className="text-7xl font-bold">about me</h1>
            <div className="text-lg font-semibold mt-5">
                <p className="text-justify">{about.bio}</p>
                <p className="mt-10 font-bold">Feel free to contact me!</p>
                <div className="flex text-5xl flex-row justify-center items-center mt-5 gap-5 text-yellow">
                    <a href={about.email}>
                        <FaEnvelope />
                    </a>
                    <a href={about.linkedin}>
                        <FaLinkedin />
                    </a>
                    <a href={about.fb}>
                        <FaSquareFacebook />
                    </a>
                </div>
            </div>
        </div>
    )
}