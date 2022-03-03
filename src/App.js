
import React from 'react';
import { ToDoCounter } from './ToDoCounter';
import { ToDoSearch } from './ToDoSearch';
import { ToDoList } from './ToDoList';
import { ToDoItem } from './ToDoItem';
import { ToDoButton } from './ToDoButton';

const toDoLists = [
  {text:'running', completed:true},
  {text:'studying', completed:false},
  {text:'eating', completed:false}
];

function App() {
  return (
    <React.Fragment >

      <ToDoCounter />
      
      {/* Sending properties inside two tags (in this case: 'input'), to get this, you should use props.children  */}
      <ToDoSearch>  
        <input placeholder="to do" />
      </ToDoSearch> 

      <ToDoList> 
        {toDoLists.map( todo => (<ToDoItem 
        key={todo.text} 
        text={todo.text} 
        completed={todo.completed}
        />))}
      </ToDoList> 

      <ToDoButton/> 
      
    </React.Fragment>
  );
}

export default App;
