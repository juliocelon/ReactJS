import React from "react";
import './ToDoCounter.css'

function ToDoCounter({total, completed})
{
    return(
        <React.Fragment>
            <div className="ToDoCounter">
                <h2>You have made {completed} of {total} To Do </h2>
            </div>
        </React.Fragment>
    );
}

export { ToDoCounter} ;