import React from "react";

function Task({ task, onEdit, onDelete }) {
  return (
    <div>
      <br/>
      <h3>{task.title}</h3>
      <p>{task.description}</p>
      <p>Status: {task.status}</p>
      <button onClick={() => onEdit(task)}>Edit</button>
      <button onClick={() => onDelete(task)}>Delete</button>
      <br/>
    </div>
    
  );
}

export default Task;