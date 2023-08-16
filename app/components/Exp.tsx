
function Exp({exp}:any){
    return(
        <div>
            <div className="flex w-auto my-10 items-center">
                <div className="w-1/3">
                    <h2 className="font-bold text-6xl">{exp.year}</h2>
                </div>
                <div className="w-2/3 text-2xl">
                    <p>{exp.xp}</p>
                </div>
            </div>
            <hr className="border-4 border-yellow rounded" />
        </div>
    )
}

export default Exp;