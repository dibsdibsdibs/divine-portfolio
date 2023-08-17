
function Exp({exp}:any){
    return(
        <div>
            <div className="grid lg:grid-cols-2 grid-cols-1 place-items-center gap-5 my-10">
                <div className="">
                    <h2 className="font-bold text-6xl">{exp.year}</h2>
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