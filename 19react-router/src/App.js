import React from "react";
import './App.css';
import About from "./components/About";
import Contact from "./components/Contact";
import Home from "./components/Home";
import NotFound from "./components/Notfound";
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';

function App(){
    return (
    <Router>
    <div class="center">
    <header>
    <h1>
    <Link to="/" >Home</Link>{' '}
    <Link to="/about">About</Link>{' '}
    <Link to="/contact">Contact</Link>
    </h1>
    </header>
    <Switch>
        <Route exact path='/' component={Home}/>
        <Route exact path='/about' component={About}/>
        <Route exact path='/contact' component={Contact}/>
        <Route component={ NotFound } />
    </Switch>
    </div>
    </Router>
    )
}

export default App;