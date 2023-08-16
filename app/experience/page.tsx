import Exp from '../components/Exp'

export default function Experience(){

    const experience = [
        {
            id: 'exp_1',
            year: 'Present',
            xp: 'I finished my 200 hours internship at Aureal Industry Corp.!'
        },
        {
            id: 'exp_2',
            year: '2023',
            xp: 'I am currently working as a Software Engineer Intern at The BLOKC!',
        }
    ]

    return(
        <div className='text-center px-16 py-10 text-violet'>
            <div>
                <h1 className="text-7xl font-bold">experience</h1>
            </div>
            <hr className="border-4 border-yellow rounded my-5" />
            <div className='font-semibold'>
                {
                    experience.map((xp:any) => (
                        <Exp exp={xp} key={xp.id}/>
                    ))
                }
            </div>
        </div>
    )
}