
function Exp({exp}:any){
    return(
        <div>
            <div className="grid lg:grid-cols-2 grid-cols-1 place-items-center gap-5 my-10">
            <div className="flex justify-center items-center sm:text-7xl text-3xl">
                <h1 className="font-bold z-10">{exp.year}</h1>
                <h1 className="font-bold text-pink absolute sm:mt-2 sm:ml-2.5 mt-1 ml-1.5">{exp.year}</h1>
            </div>
                <div className="sm:w-96 sm:text-2xl">
                    <p>{exp.xp}</p>
                </div>
            </div>
            <hr className="border-4 border-yellow rounded" />
        </div>
    )
}

export default Exp;