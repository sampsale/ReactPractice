import React from "react";
import { AppBar, Tabs } from "@mui/material";
import { Tab  } from "@mui/material";
import Carlist from "./Carlist";

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
                    <Tab value="one" label="Carlist"/>
                </Tabs>
            </AppBar>
            {value==='one'&&<div><Carlist/></div>}
        </div>
    )

}
export default TabApp;