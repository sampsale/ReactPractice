import React, {useState} from "react";
import { AppBar, Tabs } from "@mui/material";
import { Tab  } from "@mui/material";
import Todolist from "./Todolist";


function TabApp(){
    const [value, setValue] = React.useState('one');

    const handleChange = (event, value)=>{
        setValue(value)
    };

    return (
        <div>
            <AppBar position="static">
            <Tabs value={value} onChange={handleChange} TabIndicatorProps={{style: {background:'red'}}}
            sx={{marginRight:"auto",  "&& .Mui-selected": {color: "#d1d1d1"} }}
            >
                <Tab value='one' label='Home'/>
                <Tab value='two' label='To do list'/>
            </Tabs>            
            </AppBar>
            {value=== 'one'&& <div><h1>Welcome!</h1></div>}
            {value=== 'two'&&<div><Todolist/></div>}
            
        </div>


    )

}

export default TabApp;