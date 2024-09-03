import Repositories from '../components/Repositories';
import Title from '../components/Title'

export default function Projects(){

    const projs = [
        {
            name: "RPG Horror Games Website",
            src: "/proj1.png",
            role: "Dev",
            link: "https://github.com/dibsdibsdibs/Game-Website-RPG-Horror-Games",
        },
        {
            name: "UPXchange: Forum Website",
            src: "/proj2.png",
            role: "BA, Dev",
            link: "https://github.com/dibsdibsdibs/UPXchange",
        },
        {
            name: "Personal Website Portfolio",
            src: "/proj3.png",
            role: "Dev",
            link: "https://github.com/dibsdibsdibs/divine-portfolio",
        },
        {
            name: "The Meowfather",
            src: "/proj4.png",
            role: "Dev",
            link: "https://github.com/dibsdibsdibs/cat-mafia",
        },
        {
            name: "Ceres Terminal",
            src: "/proj5.png",
            role: "Dev",
            link: "https://github.com/Kim-Arcena/Ceres-Terminal",
        },
        {
            name: "Mathematical Expressions Input Using Hand Gestures",
            src: "/proj6.png",
            role: "Dev",
            link: "https://github.com/dibsdibsdibs/Mathematical-Expressions-Input-Using-Hand-Gestures",
        },
        {
            name: "ISDA: Innovatice Smishing Detecting Application",
            src: "/proj7.png",
            role: "Dev",
            link: "https://github.com/Kim-Arcena/Isda",
        }
    ]

    return(
        <div className='text-center px-16 py-10 text-violet'>
            <div>
                <Title title='projects' />
                <div>
                    <Repositories projs={projs} />
                </div>
            </div>
        </div>
    )
}