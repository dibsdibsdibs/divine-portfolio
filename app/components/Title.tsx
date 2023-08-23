
export default function Title({title}: any){

    return(
        <div className="flex justify-center items-center">
            <h1 className="text-7xl font-bold z-10">{title}</h1>
            <h1 className="text-7xl font-bold text-pink absolute mt-2 ml-3">{title}</h1>
        </div>
    )
}