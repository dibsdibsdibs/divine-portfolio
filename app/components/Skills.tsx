import Set from './Set'
import { useState } from 'react'

export default function Skills (props: any){
    const skills = props.skills
    
    return(
        <div className="text-center px-16 py-10 text-violet">
            <h1 className="text-7xl font-bold">skills</h1>
            <div>
                {
                    skills.map((set: any) => (
                        <Set set={set} key={set.id} />   
                    ))
                }
            </div>
        </div>
    )
}