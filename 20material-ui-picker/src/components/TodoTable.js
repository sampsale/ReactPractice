import React from "react";
import'ag-grid-community/dist/styles/ag-grid.css';
import'ag-grid-community/dist/styles/ag-theme-material.css';
import moment from "moment";

export default function TodoTable(props){   
    return (
    
        <div>
        <table><tbody>
      <tr><th>Description</th><th>Date</th><th>Priority</th></tr>
            {
            props.todos
            .map((todo, index) => 
            <tr key={index}>            
                <td>{todo.description}</td>
                <td>{todo.date}</td>
                <td>{todo.priority}</td>
                <td><button onClick={()=>props.deleteToDo(index, todo)}>Delete</button></td>
            </tr>
                
            )}
        </tbody></table>
        </div>
    )
}