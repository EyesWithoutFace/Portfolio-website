import React, { useState } from "react";
import Main from "./App";
import ReactDOM from 'react-dom';
import Dima from './dima'
import { BrowserRouter as Router, Redirect, Route, Link, NavLink } from "react-router-dom";


const Navbar = () => {
        return (
    <Router>
    <nav>
        <ul>
            <NavLink to='/'><li>Home</li></NavLink>
        <NavLink to='/dima'><li>Dima</li></NavLink>
        </ul>
    </nav>
    <Route exact path='/'>
    <Main></Main>
    </Route>
    <Route exact path='/dima'>
        <Dima></Dima>
    </Route>
    </Router>

        )
}

export default Navbar