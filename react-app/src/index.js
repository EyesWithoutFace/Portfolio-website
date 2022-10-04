import React from 'react';
import ReactDOM from 'react-dom/client';
import Main from './App';

const e = React.createElement


const domContainer = document.querySelector('#root');
const root = ReactDOM.createRoot(domContainer);
root.render(e(Main));