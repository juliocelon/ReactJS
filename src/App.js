import React from 'react';
import { ToDoCounter } from './ToDoCounter';
import { ToDoSearch } from './ToDoSearch';
import { ToDoList } from './ToDoList';
import { ToDoItem } from './ToDoItem';
import { ToDoButton } from './ToDoButton';

const defaultTasks = [
  {text:'Running', completed:true},
  {text:'Studying', completed:true},
  {text:'Eating', completed:false},
  { text: 'Working on project', completed: false },
];

function App() {
  const [searchValue, setSearchValue] = React.useState('');
  const [tasks, setTasks ] = React.useState(defaultTasks);

  const completedTasks = tasks.filter(task => !!task.completed ).length;
  const totalTasks = tasks.length;

  let searchedTasks = [];

  if(searchValue < 1) {
    searchedTasks = tasks;
  }else{
    searchedTasks = tasks.filter(task => {
    const taskText = task.text.toLowerCase();
    const searchText = searchValue.toLowerCase();
    return taskText.includes(searchText);
    });
  }

  const completeTask = (text) => {
    const taskIndex = tasks.findIndex( task => task.text === text);
    const newTasks = [...tasks];
    newTasks[taskIndex].completed = true;
    setTasks(newTasks); //rerender because the state has changed
  }

  const deleteTask = (text) => {
    console.log("deleteTask: "+ text);
    // Get the index of the element on the To Do List that has the same text as the text received
    const taskIndex = tasks.findIndex( task => task.text === text);
    const newTasks = [...tasks]; // Create a list of new tasks using spread operator (...)
    newTasks.splice(taskIndex , 1);
    setTasks(newTasks); //rerender because the state has changed
  }

  return (
    <React.Fragment >

      <ToDoCounter 
        total = {totalTasks}
        completed = {completedTasks}
      />

      <ToDoSearch
        searchValue = {searchValue}
        setSearchValue = {setSearchValue}
      />

      <ToDoList> 
        {searchedTasks.map( task => (
          <ToDoItem 
            key={task.text} 
            text={task.text} 
            completed={task.completed} //To sent the status of completed or not completed of the task
            onComplete={()=>completeTask(task.text)}
            onDelete={()=>deleteTask(task.text)}
          />
        ))}
      </ToDoList> 

      <ToDoButton/> 

    </React.Fragment>
  );
}

export default App;