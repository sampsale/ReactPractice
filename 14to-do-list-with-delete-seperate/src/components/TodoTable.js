import React from "react";

export default function TodoTable(props){
    return (
    
        <div>
        <table><tbody>
      <tr><th>Description</th><th>Date</th></tr>
            {
            props.todos
            .map((todo, index) => 
            <tr key={index}>            
                <td>{todo.description}</td>
                <td>{todo.date}</td>
                <td><button onClick={()=>props.deleteToDo(index, todo)}>Delete</button></td>
            </tr>
                
            )}
        </tbody></table>
        </div>
    )
}