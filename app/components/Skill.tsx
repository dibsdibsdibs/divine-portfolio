import {FaAngleDown} from "react-icons/fa6"

export default function Skill(){
    const type = 'type'

    return(
        <div className="bg-yellow/20 font-bold rounded-lg p-5">
            <div className="flex flex-row gap-3 text-2xl text-left items-center">
                <FaAngleDown />
                <p>{type}</p>
            </div>
        </div>
    )
}