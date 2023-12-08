import Set from './Set'
import Title from './Title'

export default function Skills (props: any){
    const skills = props.skills
    
    return(
        <div className="text-center px-16 py-10 text-violet">
            <div>
                <Title title='stack' />
            </div>
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