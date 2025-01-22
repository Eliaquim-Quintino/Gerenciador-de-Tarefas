import { useState } from "react";
function AddTask({onAddTaskSubmit}){  
    const [title, setTitle]= useState("");
    const [description, setDescription]= useState("");
 return(
<div className= "space-y-2 p-5 bg-zinc-700 drop-shadow-2xl rounded-2xl shadow-2xl shadow-black flex flex-col ">
    <input id="title" className="outline-none bg-slate-400 text-black text-1xl text-center rounded-2xl w-full border-none shadow-inner shadow-black placeholder-slate-500" type="text" placeholder="Nome da Tarefa" 
    value={title}
    onChange={(event)=> setTitle(event.target.value)}
    /> 
    
    <input className="outline-none bg-slate-400 text-black text-1xl text-center rounded-2xl w-full border-none shadow-inner shadow-black placeholder-slate-500"
     type="text" placeholder="Descrição da Tarefa"
     value={description}
     onChange={(event)=> setDescription(event.target.value)}
     /> 
    

    <button onClick={() => {
        if(!title.trim() || !description.trim()){
            return alert("Preencha o título e a descrição da tarefa");
        }
        onAddTaskSubmit(title, description);
            setTitle("");
            setDescription("");    
        }
    }
        className="w-full justify-center bg-lime-950 text-white  rounded-3xl p-2 m-1 shadow-md shadow-gray-900 text-center" > 
             Adicionar Tarefa 
    </button>
</div>
 );  
}
export default AddTask