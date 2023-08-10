import Image from "next/image"
import { FaEnvelope, FaLinkedin, FaSquareFacebook} from "react-icons/fa6"; 

export default function Home() {
  const aboutMe='Hello! I am Divine Grace Lavente,  an oncoming 4th year BS in Computer Science student in University of the Philippines Visayas. Ever since I was a kid, I’ve always been drawn to experimenting in our ancient HP laptop. That curiosity drew me to the course that I’m currently pursuing. My hobbies include reading, writing, playing video games, and learning and experimenting with programming languages.';

  return (
    <main>
      <div className="grid grid-cols-2 place-items-center h-screen bg-violet">
        <div className="text-8xl text-center">
          <p className="text-white font-bold">Hello! I am</p>
          <p className="text-yellow font-mango drop-shadow-2xl ">Divine Grace</p>
        </div>
        <Image
          src='/id_nobg.png'
          alt='id_nobg'
          width='500'
          height='700'
        />
      </div>
      <div className="text-center p-10">
        <h1 className="text-7xl font-bold">about me</h1>
        <div className="text-lg font-semibold mt-5">
          <p>{aboutMe}</p>
          <p>Feel free to contact me!</p>
          <div className="text-5xl">
            <FaEnvelope />
            <FaLinkedin />
            <FaSquareFacebook />
          </div>
        </div>
      </div>
    </main>
  )
}
