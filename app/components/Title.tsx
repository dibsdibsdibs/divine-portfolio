
export default function Title({title}: any){
    return(
        <div className="flex justify-center items-center sm:text-7xl text-5xl select-none">
            <h1 className="font-bold z-10">{title}</h1>
            <h1 className="font-bold text-pink absolute sm:mt-2 sm:ml-2.5 mt-1 ml-1.5">{title}</h1>
        </div>
    )
}