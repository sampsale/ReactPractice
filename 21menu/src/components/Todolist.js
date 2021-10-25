import React from "react";
import '../App.css';
import { useRef } from "react";
import{ AgGridReact} from 'ag-grid-react';
import'ag-grid-community/dist/styles/ag-grid.css';
import'ag-grid-community/dist/styles/ag-theme-material.css';
import moment from 'moment';
import MomentUtils from '@date-io/moment';
import { MuiPickersUtilsProvider, DatePicker } from "@material-ui/pickers";

function ToDoList(){
  
    
  const [desc, setDesc] = React.useState({description:'', date: new Date(), priority: ''});
  const [todos, setTodos] = React.useState([]);
  const gridRef = useRef();

  const descChanged = (event) =>{
    setDesc({...desc, [event.target.name]: [event.target.value]});
  } 

  function dateFormatter (params) {
    return moment(params.value).format("DD-MM-YYYY")
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
  console.log("DYHNAMICCELLSTYLE" + params.value);
  if (params.value == 'High'|| params.value =='high'){
    return {color: 'red'};
  }

};

  const gridOptions = {
    sortable: true, filter: true, floatingFilter: true, animateRows: true
  };

  // const [inputValue, setInputValue] = React.useState(moment().format("DD-MM-YYYY"));
  const columns =[
    {headerName:"Description", field:"description"},
    {headerName:"Date", field:"date", valueFormatter: dateFormatter},
    {headerName:"Priority", field:"priority", cellStyle: dynamicCellStyle}
  ]
  const dateChanged = (date, value) => {
      setDesc({date: date})
      // setInputValue(value);
  };  

  return (
    <div class="ag-theme-material" style={{height:'700px',width:'70%',margin:'auto'}}>
      Description: 
      <input class="input" type="text" name="description" onChange={descChanged} placeholder="Description" value={desc.description}></input>
      {/* <input type="date" name="date" onChange={descChanged} value={desc.date}></input> */}
      Priority:  
      <input class="input" type="text" name="priority" onChange={descChanged} placeholder="Priority"  value={desc.priority} />
      Date: 
      <MuiPickersUtilsProvider name="date"  libInstance={moment} utils={MomentUtils}>
          <DatePicker
            
            invalidDateMessage="Invalid date"
            autoOk={true}
            placeholder="Date"
            name="date"
            value={desc.date}
            format="DD-MM-YYYY"
            // inputValue={inputValue}
            onChange={dateChanged}
            
          />
        </MuiPickersUtilsProvider>
      <button class="input" onClick={addToDo}>Add</button>
      <button class="input" id="delete" onClick={deleteToDo}>Delete selected</button>
      <AgGridReact 
        ref = {gridRef}
        onGridReady ={params => gridRef.current = params.api}
        rowSelection = "single"
        defaultColDef={gridOptions}
        rowData={todos}
        columnDefs={columns}>
      </AgGridReact>
    </div>
  );
}

export default ToDoList;