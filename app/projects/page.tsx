import Repositories from '../components/Repositories';

export default function Projects(){

    const projs = [
        {
            name: "RPG Horror Games Website",
            id: "p-1",
            src: "/proj1.png",
            role: "Dev",
            link: "https://github.com/dibsdibsdibs/Game-Website-RPG-Horror-Games",
        },
        {
            name: "UPXchange: Forum Website",
            id: "p-2",
            src: "/proj2.png",
            role: "BA, Dev",
            link: "https://github.com/dibsdibsdibs/UPXchange",
        },
        {
            name: "Personal Website Portfolio",
            id: "p-3",
            src: "/proj3.png",
            role: "Dev",
            link: "https://github.com/dibsdibsdibs/divine-portfolio",
        },
    ]

    return(
        <div className='text-center px-16 py-10 text-violet'>
            <div>
                <h1 className="text-7xl font-bold">projects</h1>
                <div>
                    <Repositories projs={projs} />
                </div>
            </div>
        </div>
    )
}