import Image from 'next/image';
import Link from 'next/link';

function Project({proj}: any){
    return(
        <div className='w-72'>
            <div className='flex flex-col items-center justify-center w-full'>
                <Link href={proj.link}>
                    <div>
                        <Image 
                            className='h-40 w-96'
                            src={proj.src}
                            alt={proj.id}
                            width="300"
                            height="200"
                        />
                    </div>
                    <div>
                        <h4 className="text-xl font-bold">{proj.name}</h4>
                        <h4 className="text-lg font-semibold">{proj.role}</h4>
                    </div>
                </Link>
            </div>
        </div>
    )
}

export default Project;