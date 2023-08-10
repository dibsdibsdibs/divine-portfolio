import Skill from './Skill'

export default function Skills ({skills}: any){
    
    return(
        <div className="text-center px-16 py-10 text-violet">
            <h1 className="text-7xl font-bold">skills</h1>
            <div>
                <Skill />
            </div>
        </div>
    )
}