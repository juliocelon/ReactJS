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

    // Here I return an array with n internal elements, not returno just one element
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

export { ToDoSearch} ;