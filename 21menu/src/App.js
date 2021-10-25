import React from "react";
import './App.css';
import ToDoList from "./components/Todolist";
import { MuiPickersUtilsProvider } from '@material-ui/pickers';
import TabApp from "./components/TabApp";

import MomentUtils from '@date-io/moment';

function App(){
    
    return (
        <MuiPickersUtilsProvider utils={MomentUtils}>
            <TabApp/>
        </MuiPickersUtilsProvider>

    )

}

export default App;