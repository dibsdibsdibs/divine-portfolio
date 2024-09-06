'use client';
import Image from "next/image"
import About from './components/About'
import AboutBackground from "./components/AboutBackground";

export default function Home() {
  const about = {
    bio: 'Hello! I am Divine Grace Lavente, a BS Computer Science graduate from the University of the Philippines Visayas. Ever since I was a kid, I’ve always been drawn to experimenting in our ancient HP laptop. That curiosity drew me to the field of Computer Science. My hobbies include reading, writing, playing video games, and learning and experimenting with programming languages.',
    email: 'divinelavente@gmail.com',
    linkedin: 'https://www.linkedin.com/in/divinelavente/',
    github: 'https://github.com/dibsdibsdibs',
  };

  return (
    <main>
      <div className="relative grid md:grid-cols-2 fit-content place-items-center select-none bg-violet">
        <div className="relative lg:text-8xl md:text-7xl sm:text-6xl text-5xl text-center z-10">
          <p className="text-white font-bold">Hello! I am</p>
          <div className="relative flex justify-center items-center">
            <p className="text-yellow font-mango z-30">Divine Grace</p>
            <p className="text-pink absolute mt-2 font-mango z-20">Divine Grace</p>
          </div>
        </div>
        <Image
          priority={true}
          src='/id_nobg.png'
          alt='id_nobg'
          width='500'
          height='700'
          className="z-20"
        />
        <AboutBackground />
      </div>
      <About id="about" about={about} />
    </main>
  );
}
