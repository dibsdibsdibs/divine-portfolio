
function Exp({exp}:any){
    return(
        <div>
            <div className="grid lg:grid-cols-2 grid-cols-1 place-items-center gap-5 my-10">
            <div className="flex justify-center items-center">
                <h1 className="text-7xl font-bold z-10">{exp.year}</h1>
                <h1 className="text-7xl font-bold text-pink absolute mt-2 ml-2">{exp.year}</h1>
            </div>
                <div className="w-96 text-2xl">
                    <p>{exp.xp}</p>
                </div>
            </div>
            <hr className="border-4 border-yellow rounded" />
        </div>
    )
}

export default Exp;