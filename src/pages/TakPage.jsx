import {ChevronLeftIcon} from "lucide-react";
import {useNavigate, useSearchParams } from "react-router-dom";

function TaskPage() {
    const navigate= useNavigate();
    const [SearchParams] = useSearchParams();
    const title = SearchParams.get("title");
    const description = SearchParams.get("description");
   
 

    return(
<div className=" w-screen h-screen bg-slate-400 p-6 ">
    <div className="w-[500px] space-y-4 ">
    <div className="flex justify-center relative">
        <button onClick={() => navigate(-1)} className="absolute left-0 text-white font-bold bg-zinc-700 rounded-3xl p-2"><ChevronLeftIcon/></button>
            <h1 className="text-slate-800 text-3xl font-bold text-center  ">
        
                Detalhes da Tarefa
            </h1>
    </div>
        <div className="p-5 bg-zinc-700 rounded-2xl  shadow-2xl shadow-black">
            <h2 className="text-xl text-white font-bold" >
                {title}
            </h2>
            <p className="text-white ">
                {description}
            </p>
        </div>
    </div>
</div>
)
} 


export default TaskPage