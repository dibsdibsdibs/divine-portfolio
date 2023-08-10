import Image from "next/image"
import About from './components/About'
import Skills from './components/Skills'

export default function Home() {
  const about={
    bio:'Hello! I am Divine Grace Lavente,  an oncoming 4th year BS in Computer Science student in University of the Philippines Visayas. Ever since I was a kid, I’ve always been drawn to experimenting in our ancient HP laptop. That curiosity drew me to the course that I’m currently pursuing. My hobbies include reading, writing, playing video games, and learning and experimenting with programming languages.',
    email: '',
    linkedin: '',
    fb: '',
  };

  const skills=[
    {
      name: 'Languages',
      specifics: ['Python', 'C', 'Java', 'PHP', 'HTML', 'CSS', 'Javascript' ,'ReactJS', 'NextJS', 'Tailwind'],
    },
    {
      name: 'Version Control',
      specifics: ['Git, Github'],
    }
  ]

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
      <About about={about} />
      <Skills skills={skills} />
    </main>
  )
}
