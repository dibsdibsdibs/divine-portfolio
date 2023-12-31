import Title from './Title'

import { FaEnvelope, FaLinkedin, FaGithub} from "react-icons/fa6"; 

export default function About({about}: any){

    return(
        <div className="text-center px-16 py-10 text-violet">
            <Title title="about" />
            <div className="text-lg font-semibold mt-5">
                <p className="text-justify select-none">{about.bio}</p>
                <p className="mt-10 font-bold select-none">Feel free to contact me!</p>
                <div className="flex sm:text-5xl text-4xl flex-row justify-center items-center mt-5 gap-5 text-yellow">
                    <a href={`${'mailto:'}${about.email}`}>
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
        </div>
    )
}