import React from 'react';
import ReactDOM from 'react-dom/client';
import Main from './App';
import Navbar from './Navbar'

const e = React.createElement


const domContainer = document.querySelector('#navbar');
const root = ReactDOM.createRoot(domContainer);
root.render(e(Navbar));