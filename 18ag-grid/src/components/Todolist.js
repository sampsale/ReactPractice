import React from "react";
import '../App.css';
import { useRef } from "react";
import{ AgGridReact} from 'ag-grid-react';
import'ag-grid-community/dist/styles/ag-grid.css';
import'ag-grid-community/dist/styles/ag-theme-material.css';
import { AgGridColumn } from "ag-grid-react";
function ToDoList(){
  
    
  const [desc, setDesc] = React.useState({description:'', date:'', priority: ''});
  const [todos, setTodos] = React.useState([]);
  const gridRef = useRef();

  const descChanged = (event) =>{
    setDesc({...desc, [event.target.name]: [event.target.value]});
  } 


  const addToDo = (event) =>{
    event.preventDefault();
    console.log(desc);
    setTodos([...todos, desc]);
    console.log(todos);
  }
 
  const deleteToDo = () => {
    console.log(gridRef.current.getSelectedNodes)
    if (gridRef.current.getSelectedNodes().length > 0){
      setTodos(todos.filter((todo, i) => i !== gridRef.current.getSelectedNodes()[0].childIndex));
    }else{
      alert('select a row')
    }
  }


const dynamicCellStyle = params => {
  if (params.value == 'High'|| params.value =='high'){
    return {color: 'red'};
  }

};
const gridOptions = {
  sortable: true, filter: true, floatingFilter: true, animateRows: true};

  return (
    <div class="ag-theme-material" style={{height:'700px',width:'70%',margin:'auto'}}>
      <input type="text" name="description" onChange={descChanged} placeholder="Description" value={desc.description}></input>
      <input type="date" name="date" onChange={descChanged} value={desc.date}></input>
      <input type="text" name="priority" onChange={descChanged} placeholder="Priority"  value={desc.priority} />
       
      <button onClick={addToDo}>Add</button>
      <button onClick={deleteToDo}>Delete</button>
      <AgGridReact 
        ref = {gridRef}
        onGridReady ={params => gridRef.current = params.api}
        rowSelection = "single"
        defaultColDef={gridOptions}
        rowData={todos}>
          <AgGridColumn headerName="Description" field="description" ></AgGridColumn>
          <AgGridColumn headerName="Date" field="date"></AgGridColumn>
          <AgGridColumn headerName="Priority" field="priority" cellStyle={dynamicCellStyle}></AgGridColumn>
      </AgGridReact>
    </div>
  );
}

export default ToDoList;