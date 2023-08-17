import Image from "next/image"

export default function Skill({skill}: any){

    return(
        <div className="w-72">
            <div className='flex flex-col items-center'>
                <Image 
                    src={skill.icon}
                    alt={skill.name}
                    height='50'
                    width='50'
                    className=""
                />
                <p>{skill.name}</p>
            </div>
        </div>
    )
}