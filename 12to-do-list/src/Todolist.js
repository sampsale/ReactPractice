import React from "react";
import './App.css';


function Todolist(){
    
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

 

  return (
    <div >
      <input type="text" name="description" onChange={descChanged} value={desc.description}></input>
      <input type="text" name="date" onChange={descChanged} value={desc.date}></input>
      <button onClick={addToDo}>Add</button>
      <table><tbody>
      <tr><th>Description</th><th>Date</th></tr>
        {
        todos
        .map((todo, index) => 
        <tr key={index}>            
            <td>{todo.description}</td>
            <td>{todo.date}</td>
            
        </tr>
            
        )}
      </tbody></table>
    </div>
  );
}

export default Todolist;