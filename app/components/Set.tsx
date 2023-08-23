import {FaAngleDown} from "react-icons/fa6"
import Skill from './Skill'
import { useState } from 'react'

export default function Set({set}: any){
    const skills = set.specifics

    const [openSet, setToggle] = useState(false)

    const handleToggle = () => {
        setToggle(!openSet)
    }

    return(
        <div className="bg-yellow/20 font-bold rounded-lg p-5 mt-5">
            <a 
                className="flex flex-row gap-3 sm:text-2xl text-left items-center"
                onClick={handleToggle}
            >
                <FaAngleDown />
                <p>{set.name}</p>
            </a>
            <div className={`${'flex flex-wrap justify-center gap-y-4 p-5'} ${openSet === true ? '' : 'hidden'}`} >
                {
                    skills.map((skill: any) => (
                        <Skill skill={skill} key={skill.id} />   
                    ))
                }
            </div>
        </div>
    )
}