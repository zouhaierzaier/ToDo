import React, {useState} from "react";

function ToDoList(){
    const[tasks, setTasks]= useState([]);
    const [newTask, setNewTask] = useState("");

    function InputeChange(event){
        setNewTask(event.target.value);

    }
    function addTaske(){

        if(newTask.trim()!==""){
            setTasks(t=> [...t,newTask]);
            setNewTask("");
        }

    }
    function deleteTaske(index){
        const updatedTasks = tasks.filter((_, i)=> i !== index);
        setTasks(updatedTasks);


    }
    function moveTaskeUp(index){
        if(index > 0){
            const updatedTasks =[...tasks];
            [updatedTasks[index],updatedTasks[index-1]] =[updatedTasks[index-1],updatedTasks[index]];
            setTasks(updatedTasks);
        }

    }
    function moveTaskeDown(index){
        if(index < tasks.length -1){
            const updatedTasks =[...tasks];
            [updatedTasks[index],updatedTasks[index+1]] =[updatedTasks[index+1],updatedTasks[index]];
            setTasks(updatedTasks);
        }


    }
    return(<div className="todo">
        <h1>To-DO-List</h1>
        <div>
            <input
            type="text"
            placeholder="Enter a taske..."
            value={newTask}
            onChange={InputeChange}/>
            <button className="add-button"
            onClick={addTaske}
            >Add</button>

        </div>
        <ol>
            {tasks.map((task, index)=>
                <li key={index}>
                    <span className="text">{task}</span>
                    <button
                    className="delete-button"
                    onClick={() => deleteTaske(index)}>
                        Delete

                    </button>
                    <button
                    className="move-button"

                    onClick={() => moveTaskeUp(index)}>
                        👍
                                            
                    </button>
                    <button
                    className="move-button"
                    onClick={() => moveTaskeDown(index)}>
                        👌
                    </button>

                </li>
            
            )}

        </ol>
    </div>

    );
}
export default ToDoList