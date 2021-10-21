import React from "react";
import './App.css';


function App(){
    
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
        {
        todos
        .map((todo, index) => 
        <tr key={index}>            
            <td>{todo.description}</td>
            <td>{todo.date}</td>
            <td><button onClick={()=>deleteToDo(index, todo)}>Delete</button></td>
        </tr>
            
        )}
      </tbody></table>
    </div>
  );
}

export default App;