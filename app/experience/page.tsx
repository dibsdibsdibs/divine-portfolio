import Exp from '../components/Exp'
import Title from '../components/Title'

export default function Experience(){

    const experience = [
        {
            id: 'exp_1',
            year: 'Present',
            xp: 'I am currently working as a Software Engineer Intern at The BLOKC!'
        },
        {
            id: 'exp_2',
            year: '2023',
            xp: 'I finished my 200 hours internship at Aureal Industry Corp.!',
        }
    ]

    return(
        <div className='text-center px-16 py-10 text-violet'>
            <div>
                <Title title='experience' />
            </div>
            <hr className="border-4 border-yellow rounded my-5" />
            <div className='font-semibold select-none'>
                {
                    experience.map((xp:any) => (
                        <Exp exp={xp} key={xp.id}/>
                    ))
                }
            </div>
        </div>
    )
}