import { DeleteIcon, PanelLeftOpen } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
function Tasks({tasks,onDeleteTaskClick,onTaskClick}){
const navigate= useNavigate();
const voidtest= tasks.length === 0? true:false;

function onSeeDetailsClick(tasks){
    const query= new URLSearchParams();
    query.set("title",tasks.title);
    query.set("description",tasks.description);
    navigate(`/task?${query.toString()}`);
}


return(
    
    <ul className={` p-5 bg-zinc-700  rounded-2xl shadow-2xl shadow-black ${voidtest && "hidden"}`} > 
       
        {tasks.map((tasks) => 
        <li key={tasks.id}  className="flex ">
           <button onClick={() => onTaskClick(tasks.id)} className={`w-full bg-slate-500 rounded-3xl cursor-pointer m-1 p-2 text-white text-left ${tasks.isCompleted && "line-through shadow-inner shadow-green-800 text-gray-700"}`}>
            {tasks.title}
            </button>
           <button onClick={()=>onSeeDetailsClick(tasks)} className="bg-slate-500 rounded-3xl m-1 p-2 text-white">
           <PanelLeftOpen />
            </button>
           <button onClick={() => onDeleteTaskClick(tasks.id)} className="bg-red-800 rounded-3xl m-1 p-2 text-white ">
           <DeleteIcon />
            </button>
        </li>)}
        
    </ul>);
}

export default Tasks