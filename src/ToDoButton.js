import React from "react";
import'./ToDoButton.css'

function ToDoButton()
{
    const onClickButton = () => {
        alert('Modal');
    }; 

    return(
        <button className="MyButton" onClick = { () => onClickButton() } >
            +
        </button>
    );
}

export { ToDoButton } ;