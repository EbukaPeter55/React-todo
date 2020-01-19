import React from "react"
//dynamically style the completed input to be green, text italic and a line-through it.
function TodoItem(props) {
    const completedStyle = {
        color: "green",
        fontStyle: "italic",
        textDecoration: "line-through"
        }
    return (
        <div className="todo-item">
            <input 
                type="checkbox" 
                checked={props.item.completed} 
                onChange={() => props.handleChange(props.item.id)}
            />
            <p style= {props.item.completed ? completedStyle : null}>{props.item.text}</p>
        </div>
    )
}

export default TodoItem