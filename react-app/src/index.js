import React from 'react';
import ReactDOM from 'react-dom/client';
import Main from './App';
import Navbar from './Navbar'

const e = React.createElement


const domContainer = document.querySelector('#main');
const root = ReactDOM.createRoot(domContainer);
root.render(e(Main));

const navContainer = document.querySelector('#navbar');
const navRoot = ReactDOM.createRoot(navContainer);
navRoot.render(e(Navbar))