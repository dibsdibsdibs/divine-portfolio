import {FaAngleDown} from "react-icons/fa6"
import Skill from './Skill'

export default function Set({set}: any){
    const skills = set.specifics

    return(
        <div className="bg-yellow/20 font-bold rounded-lg p-5 mt-5">
            <div className="flex flex-row gap-3 text-2xl text-left items-center">
                <FaAngleDown />
                <p>{set.name}</p>
            </div>
            <div className="grid grid-cols-4 gap-y-4 p-5">
                {
                    skills.map((skill: any) => (
                        <Skill skill={skill} key={skill.id} />   
                    ))
                }
            </div>
        </div>
    )
}