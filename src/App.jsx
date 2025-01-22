import { useEffect, useState } from "react";
import AddTask from "./components/AddTask";
import Tasks from "./components/Tasks";
import {v4} from "uuid";

function App() {
const [tasks, setTasks] = useState(
  JSON.parse(localStorage.getItem("tasks"))||[]
);
useEffect(()=>{
localStorage.setItem("tasks", JSON.stringify(tasks));
},[tasks]);

function onTaskClick(taskId){
      const newTasks= tasks.map(tasks=> {
      if(tasks.id === taskId){
        return{...tasks, isCompleted: !tasks.isCompleted};
      }
      return tasks;});

      setTasks(newTasks);
};
function onDeleteTaskClick(taskId){
  const newTask = tasks.filter(tasks => tasks.id !== taskId);
  setTasks(newTask);
  }; 
      
  function onAddTaskSubmit(title,description){
    const newTask= {
      id:v4() ,
      title,
      description,
      inCompleted:false,
    };
    setTasks([...tasks,newTask])
  }
return (
  <div className=" w-screen h-screen bg-slate-400 flex justify-center p-6  ">
    <div className="m-4 w-[500px] space-y-6 ">
    <h1 className="text-slate-800 text-3xl font-bold text-center  "> 
      Organizador de Tarefas 
      </h1>
    <AddTask onAddTaskSubmit={onAddTaskSubmit}/>
    <Tasks tasks={tasks} onTaskClick={onTaskClick} onDeleteTaskClick={onDeleteTaskClick} />
    
  </div>  
</div>
);
}
export default App