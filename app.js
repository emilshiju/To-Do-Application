

import  { useState } from "react"


const App=()=>{

            
const [tasks,setTasks]=useState([])
const [task,setTask]=useState('')


const addTasks=()=>{

    if(task!=0){
        setTasks([...tasks,task])
        setTask('')
    }
  
}

const deleted=(val)=>{
    let updated=[...tasks]
    delete updated[val]
    setTasks(updated)
}

    return (
        <div className="flex flex-col items-center">

                <h1  className="text-4xl m-10 font-bold">Simple Todo App</h1>
        
            <div className=" p-6">
                <input 
                className="bg-slate-100 rounded-md p-4 m-4"
                type="text" 
                value={task}
                onChange={(e)=>{
                    setTask(e.target.value)
                }}
                placeholder="Create a new Todo " 
                />

                    <button
                    onClick={addTasks}
                     className="bg-green-400 text-white p-3 m-3 rounded-md font-bold hover:bg-green-600">Add Task</button>
                
            </div>

            <div>


             {tasks?.length>0?(
                <ul>
                    {
                        tasks.map((tas,index)=>(
                            <div key={index}>
                                <li >{tas}</li>
                                <button 
                                onClick={()=>{deleted(index)}}
                                className="bg-red-500 text-white p-2 mx-1 rounded-md font-bold">Delete</button>

                            </div>
                        ))
                    }
                </ul>
             ):(
                <div> </div>
             )}

            </div>


        </div>
     )
}

export default App