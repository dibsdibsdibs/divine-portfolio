'use client';
import Image from "next/image"
import About from './components/About'
import Skills from './components/Skills'

export default function Home() {
  const about={
    bio:'Hello! I am Divine Grace Lavente,  an oncoming 4th year BS in Computer Science student in University of the Philippines Visayas. Ever since I was a kid, I’ve always been drawn to experimenting in our ancient HP laptop. That curiosity drew me to the course that I’m currently pursuing. My hobbies include reading, writing, playing video games, and learning and experimenting with programming languages.',
    email: 'divinelavente@gmail.com',
    linkedin: 'https://www.linkedin.com/in/divinelavente/',
    discord: '',
  };

  const skills=[
    {
      name: 'Language',
      id: 's1',
      specifics: [
        {
          name: 'Python',
          id: 's1-a',
          icon: '/python.png',
        },
        {
          name: 'C',
          id: 's1-b',
          icon: '/c.png',
        },
        {
          name: 'Java',
          id: 's1-c',
          icon: '/java.png',
        },
        {
          name: 'PHP',
          id: 's1-d',
          icon: '/php.png',
        },
        {
          name: 'HTML',
          id: 's1-e',
          icon: '/html.png',
        },
        {
          name: 'CSS',
          id: 's1-f',
          icon: '/css.png',
        },
        {
          name: 'Javascript',
          id: 's1-g',
          icon: '/js.png',
        },
        {
          name: 'Typescript',
          id: 's1-h',
          icon: '/ts.png',
        },
      ]
    },
    {
      name: 'Version Control',
      id: 's2',
      specifics: [
        {
          name: 'Git',
          id: 's2-a',
          icon: '/git.png'
        },
        {
          name: 'Github',
          id: 's2-b',
          icon: '/github.png'
        },
      ]
    },
    {
      name: 'Database',
      id: 's3',
      specifics: [
        {
          name: 'MySQL',
          id: 's3-a',
          icon: '/mysql.png'
        },
      ]
    },
    {
      name: 'Software',
      id: 's4',
      specifics:[
        {
          name: 'Microsoft Office',
          id: 's4-a',
          icon: '/office.png'
        },
        {
          name: 'Google Docs Editor',
          id: 's4-b',
          icon: '/gdocs.png'
        },
        {
          name: 'Adobe Photoshop',
          id: 's4-c',
          icon: '/ps.png'
        },
        {
          name: 'Adobe Premiere Pro',
          id: 's4-d',
          icon: '/pr.png'
        },
        {
          name: 'Figma',
          id: 's4-e',
          icon: '/figma.png'
        },
      ]
    }
  ]

  return (
    <main>
      <div className="grid md:grid-cols-2 place-items-center fit-content bg-violet">
        <div className="lg:text-8xl md:text-7xl text-6xl text-center">
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
      <About id="about" about={about} />
      <Skills skills={skills} />
    </main>
  )
}
