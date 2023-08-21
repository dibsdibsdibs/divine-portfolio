
export default function Title({title}: any){

    return(
        <div className="flex justify-center items-center">
            <h1 className="text-7xl font-bold">{title}</h1>
            <h1 className="text-7xl font-bold text-pink">{title}</h1>
        </div>
    )
}