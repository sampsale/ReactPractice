import React from "react";

import{ AgGridReact} from 'ag-grid-react';
import'ag-grid-community/dist/styles/ag-grid.css';
import'ag-grid-community/dist/styles/ag-theme-material.css';
import 'ag-grid-community';

import Button from '@mui/material/Button'
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';

import Editcar from "./Editcar";
import Addcar from "./Addcar";
import '../App.css';

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

    const editCar =(car, link)=>{
        console.log("PUT METHOD " + link.value);
        fetch(link, 
        {method:'PUT',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(car)}
        )
        .then(res => fetchData())
        .catch(err=>console.log(err));

       
    }
    const deleteCar =(link)=>{
        console.log("DELETE METHOD " + link.value)
        if (window.confirm("Are you sure you want to delete car " + 
        listCars[link.rowIndex].brand + " " + listCars[link.rowIndex].model + " " + listCars[link.rowIndex].year ))
        {
            fetch(link.value, {method: 'DELETE'})
            .then(res => fetchData())
            .catch(err=>console.log(err));
        }
        
    }

    const saveCar = (car) =>{
        console.log("POST METHOD ")
        fetch("https://carstockrest.herokuapp.com/cars", {method: 'POST', 
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(car)
        })
        .then(res=> fetchData())
        .catch(err=>console.log(err));
    }

    const columns =[
        
        {headerName:"Brand", field:"brand"},
        {headerName:"Model", field:"model"},
        {headerName:"Color", field:"color"},
        {headerName:"Fuel", field:"fuel"},
        {headerName:"Year", field:"year"},
        {headerName:"Price", field:"price", valueFormatter: currencyFormatter },
        {headerName:"Edit", field:"car", sortable: false, filter:false, width: 100,
        cellRendererFramework:(params)=><div>
                
             <Editcar params={params.data}  editCar={editCar}/>
        </div>}, 
        {headerName:"Delete", field:"_links.self.href", sortable: false, filter:false, size: "small",
        cellRendererFramework:(params)=><div>
            <IconButton  variant="contained" color="error"
            onClick={() => deleteCar(params)}
            > <DeleteIcon /></IconButton>
        </div>
        }
    ]
    function currencyFormatter(params) {
        if (params.value === 0){
            return "N/A";
        }
        return params.value + "€";
      }
    const gridOptions = {
        sortable: true, filter: true, floatingFilter: true, animateRows: true, resizable: true,
        width: 150
    };


    return (
        
    <div className="ag-theme-material" style={{height:'700px',width:'95%',margin:'auto'}}>
    <Addcar saveCar={saveCar}/>
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