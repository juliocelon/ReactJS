import React from "react";
import './ToDoSearch.css'

function ToDoSearch({searchValue, setSearchValue}) {

    // Use of states
    // const [searchValue, setSearchValue] = React.useState('');

    const onSearchValueChanged = (event) => {
      console.log(event.target.value);
      setSearchValue(event.target.value);
    };

    return (
      <input 
        className="TodoSearch" 
        placeholder="Looking for" 
        value = {searchValue}
        onChange={ onSearchValueChanged }
      />
    );

    // In this case, I return an array with n internal elements, not return just one element, just to show how to write on <p>
    // return [
    //   <input 
    //     className="TodoSearch" 
    //     placeholder="Looking for" 
    //     value = {searchValue}
    //     onChange={ onSearchValueChanged }
    //   />,
    //   <p>{searchValue}</p>
    // ];
  }

export { ToDoSearch } ;