import React from "react";
import Task from "./Task";

function TaskList({ tasks, onEdit, onDelete }) {
  return (
    <div>
      {tasks.map((task) => (
        <Task key={task.id} task={task} onEdit={onEdit} onDelete={onDelete}/>
      ))}
    </div>
  );
}

export default TaskList;