import Project from "./Project";

function Repositories({projs}: any){
    return(
        <div className="flex flex-wrap items-center justify-center mt-5 p-5 space-between gap-8">
            {
                projs.map((proj: any) => (
                    <Project proj={proj} key={proj.id} />
                ))
            }
        </div>
    )
}

export default Repositories;