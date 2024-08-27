'use client';
import Skills from '../components/Skills'

export default function Stack(){
    const skills=[
        {
          name: 'Language',
          id: 's1',
          specifics: [
            {
              name: 'Python',
              id: 's1-a',
              icon: '/python.png',
            },
            {
              name: 'C',
              id: 's1-b',
              icon: '/c.png',
            },
            {
              name: 'Java',
              id: 's1-c',
              icon: '/java.png',
            },
            {
              name: 'PHP',
              id: 's1-d',
              icon: '/php.png',
            },
            {
              name: 'HTML',
              id: 's1-e',
              icon: '/html.png',
            },
            {
              name: 'CSS',
              id: 's1-f',
              icon: '/css.png',
            },
            {
              name: 'Javascript',
              id: 's1-g',
              icon: '/js.png',
            },
            {
              name: 'Typescript',
              id: 's1-h',
              icon: '/ts.png',
            },
          ]
        },
        {
            name: 'Frameworks',
            id: 's5',
            specifics: [
                {
                    name: 'ReactJS',
                    id: 's5-a',
                    icon: '/react.png'
                },
                {
                    name: 'NextJS',
                    id: 's5-b',
                    icon: '/next.png'
                }
            ]

        },
        {
          name: 'Version Control',
          id: 's2',
          specifics: [
            {
              name: 'Git',
              id: 's2-a',
              icon: '/git.png'
            },
            {
              name: 'Github',
              id: 's2-b',
              icon: '/github.png'
            },
          ]
        },
        {
          name: 'Database',
          id: 's3',
          specifics: [
            {
              name: 'MySQL',
              id: 's3-a',
              icon: '/mysql.png'
            },
            {
              name: 'MongoDB',
              id: 's3-b',
              icon: '/mongodb.png'
            },
          ]
        },
        {
          name: 'Software',
          id: 's4',
          specifics:[
            {
              name: 'Microsoft Office',
              id: 's4-a',
              icon: '/office.png'
            },
            {
              name: 'Google Docs Editor',
              id: 's4-b',
              icon: '/gdocs.png'
            },
            {
              name: 'Adobe Photoshop',
              id: 's4-c',
              icon: '/ps.png'
            },
            {
              name: 'Adobe Premiere Pro',
              id: 's4-d',
              icon: '/pr.png'
            },
            {
              name: 'Figma',
              id: 's4-e',
              icon: '/figma.png'
            },
          ]
        },
        {
          name: 'Platform',
          id: 's5',
          specifics: [
            {
              name: 'Postman',
              id: 's5-a',
              icon: '/postman.png'
            },
            {
              name: 'Docker',
              id: 's5-b',
              icon: '/docker.png'
            },
            {
              name: 'AWS-EC2',
              id: 's5-c',
              icon: '/aws-ec2.png'
            },
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