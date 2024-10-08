import {FaAngleDown} from "react-icons/fa6"
import Skill from './Skill'
import { useState } from 'react'

export default function Set({ set, id }: { set: any; id: string }) {
    const skills = set.specifics
    const [openSet, setToggle] = useState(false)

    const handleToggle = () => {
        setToggle(!openSet)
    }

    return(
        <div className="bg-yellow/20 font-bold rounded-lg p-5 mt-5">
            <a 
                className="flex flex-row gap-3 sm:text-2xl text-left items-center cursor-pointer"
                onClick={handleToggle}
            >
                <FaAngleDown />
                <p>{set.name}</p>
            </a>
            <div className={`${'flex flex-wrap justify-center gap-y-4 p-5 select-none'} ${openSet === true ? '' : 'hidden'}`} >
                {
                    skills.map((skill: any, index: number) => (
                        <Skill skill={skill} key={id+'_'+index} />
                    ))
                }
            </div>
        </div>
    )
}