'use client';
import Image from "next/image"
import About from './components/About'


export default function Home() {
  const about={
    bio:'Hello! I am Divine Grace Lavente,  an oncoming 4th year BS in Computer Science student in University of the Philippines Visayas. Ever since I was a kid, I’ve always been drawn to experimenting in our ancient HP laptop. That curiosity drew me to the course that I’m currently pursuing. My hobbies include reading, writing, playing video games, and learning and experimenting with programming languages.',
    email: 'divinelavente@gmail.com',
    linkedin: 'https://www.linkedin.com/in/divinelavente/',
    github: 'https://github.com/dibsdibsdibs',
  };

  return (
    <main>
      <div className="grid md:grid-cols-2 fit-content place-items-center bg-violet">
        <div className="lg:text-8xl md:text-7xl sm:text-6xl text-5xl text-center">
          <p className="text-white font-bold">Hello! I am</p>
          <div className="flex justify-center items-center">
            <p className="text-yellow font-mango z-10">Divine Grace</p>
            <p className="text-pink absolute lg:mt-2 lg:ml-3 mt-1 ml-2 font-mango">Divine Grace</p>
          </div>
        </div>
        <Image
          priority={true}
          src='/id_nobg.png'
          alt='id_nobg'
          width='500'
          height='700'
        />
      </div>
      <About id="about" about={about} />
    </main>
  )
}
