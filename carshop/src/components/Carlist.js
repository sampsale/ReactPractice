import React from "react";
import '../App.css';
import{ AgGridReact} from 'ag-grid-react';
import'ag-grid-community/dist/styles/ag-grid.css';
import'ag-grid-community/dist/styles/ag-theme-material.css';
import 'ag-grid-community';
import Button from '@mui/material/Button'


function Carlist(){

    const [listCars, setCars]  = React.useState([]); 
    

    React.useEffect(() => fetchData(), [])

    const fetchData= ()=>{
        fetch("https://carstockrest.herokuapp.com/cars")
        .then(response=>response.json())
        .then(responseData =>{
            setCars(responseData._embedded.cars);
        })
        .catch(err=>console.log(err));
        
    }
    const editCar =(link)=>{
        console.log("UPDATE METHOD " + link.value)
    }
    const deleteCar =(link)=>{
        console.log("DELETE METHOD " + link.value)
        if (window.confirm("Are you sure you want to delete car " + 
        listCars[link.rowIndex].brand + " " + listCars[link.rowIndex].model + " " + listCars[link.rowIndex].year ))
        {
            fetch(link.value, {method: 'DELETE'})
            .then(res=> fetchData())
            .catch(err=>console.log(err));
        }
        
    }

    const columns =[
        
        {headerName:"Brand", field:"brand"},
        {headerName:"Model", field:"model"},
        {headerName:"Color", field:"color"},
        {headerName:"Fuel", field:"fuel"},
        {headerName:"Year", field:"year"},
        {headerName:"Price", field:"price"},
        {headerName:"Action", field:"_links.self.href", sortable: false, filter:false,
        cellRendererFramework:(params)=><div>
            <Button style={{maxWidth: '30px', fontSize: '12px', maxHeight: '30px', minWidth: '30px', minHeight: '30px'}} variant="contained"
            onClick={() => editCar(params)}

             >Edit</Button>
             <Button style={{maxWidth: '30px', fontSize: '8px', maxHeight: '30px', minWidth: '30px', minHeight: '30px'}} variant="contained" color="error"
            onClick={() => deleteCar(params)}

             >Delete</Button>
        </div>
    }
    ]

    const gridOptions = {
        sortable: true, filter: true, floatingFilter: true, animateRows: true, resizable: true,
        width: 150
    };
    
    return (
    <div class="ag-theme-material" style={{height:'700px',width:'95%',margin:'auto'}}>
        
        <AgGridReact
            rowData ={listCars}
            rowSelection = "single"
            defaultColDef={gridOptions}
            columnDefs={columns}>
            
           
        </AgGridReact>
       
    </div>
    )
}
export default Carlist;