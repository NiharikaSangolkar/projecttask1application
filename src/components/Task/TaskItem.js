// src/components/Task/TaskItem.js
import React from 'react';

const TaskItem = ({ task }) => {
  return (
    <div>
      <h3>{task.name}</h3>
      <p>{task.description}</p>
      <p>Due Date: {task.dueDate}</p>
      <p>Status: {task.status}</p>
    </div>
  );
};

export default TaskItem;
