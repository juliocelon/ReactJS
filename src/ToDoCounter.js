import React from "react";
import './ToDoCounter.css'

function ToDoCounter(props)
{
    return(
        <React.Fragment>
            <div className="ToDoCounter">
                <h2>You have made 2 of 3 To Do </h2>
                {props.information}
            </div>
        </React.Fragment>
    );
}

export { ToDoCounter} ;