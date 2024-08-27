'use client';
import Skills from '../components/Skills'

export default function Stack(){
  const skills = [
    {
        name: 'Language',
        specifics: [
            { name: 'Python', icon: '/python.png' },
            { name: 'C', icon: '/c.png' },
            { name: 'Java', icon: '/java.png' },
            { name: 'PHP', icon: '/php.png' },
            { name: 'HTML', icon: '/html.png' },
            { name: 'CSS', icon: '/css.png' },
            { name: 'Javascript', icon: '/js.png' },
            { name: 'Typescript', icon: '/ts.png' },
        ]
    },
    {
        name: 'Frameworks',
        specifics: [
            { name: 'ReactJS', icon: '/react.png' },
            { name: 'NextJS', icon: '/next.png' }
        ]
    },
    {
        name: 'Version Control',
        specifics: [
            { name: 'Git', icon: '/git.png' },
            { name: 'Github', icon: '/github.png' },
        ]
    },
    {
        name: 'Database',
        specifics: [
            { name: 'MySQL', icon: '/mysql.png' },
            { name: 'MongoDB', icon: '/mongodb.png' },
        ]
    },
    {
        name: 'Software',
        specifics: [
            { name: 'Microsoft Office', icon: '/office.png' },
            { name: 'Google Docs Editor', icon: '/gdocs.png' },
            { name: 'Adobe Photoshop', icon: '/ps.png' },
            { name: 'Adobe Premiere Pro', icon: '/pr.png' },
            { name: 'Figma', icon: '/figma.png' },
        ]
    },
    {
        name: 'Platform',
        specifics: [
            { name: 'Postman', icon: '/postman.png' },
            { name: 'Docker', icon: '/docker.png' },
            { name: 'AWS-EC2', icon: '/aws-ec2.png' },
        ]
    }
  ]

    return(
        <div className='text-center text-violet'>
            <div>
                <Skills skills={skills} />
            </div>
        </div>
    )
}