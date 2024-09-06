'use client';
import Exp from '../components/Exp'
import Title from '../components/Title'

export default function Experience(){

    const experience = [
        {
            id: 'exp_4',
            year: 'Present',
            xp: 'Currently working as a Software Developer in Powerfan Inc.!'
        },
        {
            id: 'exp_3',
            year: '2024',
            xp: 'I graduated with a Bachelor of Science in Computer Science, Cum Laude, from the University of the Philippines Visayas.'
        },
        {
            id: 'exp_2',
            year: '2023',
            xp: 'I was a Software Engineer Intern at The BLOKC!'
        },
        {
            id: 'exp_1',
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