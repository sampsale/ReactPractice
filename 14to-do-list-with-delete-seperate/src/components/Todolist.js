import React from "react";
import '../App.css';
import TodoTable from "./TodoTable";

function ToDoList(){
  
    
  const [desc, setDesc] = React.useState({description:'', date:''});
  const [todos, setTodos] = React.useState([]);


  const descChanged = (event) =>{
    setDesc({...desc, [event.target.name]: [event.target.value]});
  } 


  const addToDo = (event) =>{
    event.preventDefault();
    console.log(desc);
    setTodos([...todos, desc]);
    console.log(todos);
  }

  const deleteToDo = (index, todo) =>{
    console.log(index);
    console.log(todo);
    setTodos(todos.filter((todo, i) => i !== index));
  }

  return (
    <div class="center">
      <input type="text" name="description" onChange={descChanged} value={desc.description}></input>
      <input type="date" name="date" onChange={descChanged} value={desc.date}></input>
      <button onClick={addToDo}>Add</button>
      <table><tbody>
      <tr><th>Description</th><th>Date</th></tr>
        <TodoTable todos={todos} deleteToDo={deleteToDo}/>
      </tbody></table>
    </div>
  );
}

export default ToDoList;