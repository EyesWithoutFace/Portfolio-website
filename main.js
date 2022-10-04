import React from 'react';
import ReactDOM from 'react-dom';

class ToDoList extends React.Component {
  render() {
  return (
  <ol>
    <li>Learn React</li>
    <li>Become a Developer</li>
  </ol>
  )
};
 
ReactDOM.render(
  <ToDoList />, 
  document.getElementById('app')
  );