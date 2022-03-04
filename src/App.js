
import React from 'react';
import { ToDoCounter } from './ToDoCounter';
import { ToDoSearch } from './ToDoSearch';
import { ToDoList } from './ToDoList';
import { ToDoItem } from './ToDoItem';
import { ToDoButton } from './ToDoButton';

const toDoLists = [
  {text:'running', completed:true},
  {text:'studying', completed:true},
  {text:'eating', completed:false}
];

function App() {

  // It´s an state
  const [searchValue, setSearchValue] = React.useState('');

  const [tasks, setTasks ] = React.useState(toDoLists);

  const completedTasks = tasks.filter(task => !!task.completed ).length;
  // const completedTasks = tasks.filter(taks => task.completed == true);

  const totalTasks = tasks.length;

  let searchedTasks = [];

  if(!searchValue >= 1)
  {
    searchedTasks = tasks;
  }
  else
  {
    searchedTasks = tasks.filter(task => {
      const taskText = task.text.toLowerCase();
      const searchText = searchValue.toLowerCase();
      return taskText.includes(searchText);
    })
  }
  

  return (
    <React.Fragment >

      <ToDoCounter 
        total = {totalTasks}
        completed = {completedTasks}
      />
      
      {/* Sending properties inside two tags (in this case: 'input'), to get this, you should use props.children  */}
      <ToDoSearch
        searchValue = {searchValue}
        setSearchValue = {setSearchValue}
      >  
        <input placeholder="to do" />
      </ToDoSearch> 

      <ToDoList> 
        {searchedTasks.map( todo => (<ToDoItem 
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
