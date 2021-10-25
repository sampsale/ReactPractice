import React from "react";
import './App.css';
import ToDoList from "./components/Todolist";
import { MuiPickersUtilsProvider } from '@material-ui/pickers';

import MomentUtils from '@date-io/moment';

function App(){
    
    return (
        <MuiPickersUtilsProvider utils={MomentUtils}>
            <ToDoList/>
        </MuiPickersUtilsProvider>

    )

}

export default App;