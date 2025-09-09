import React from "react";
import "./TaskList.css";

function TaskList({ tasks, toggleTask, deleteTask }) {
  return (
    <ul className="task-list">
      {tasks.map((task) => (
        <li key={task.id} className={task.completed ? "completed" : ""}>
          <input
            type="checkbox"
            checked={task.completed}
            onChange={() => toggleTask(task.id)}
          />
          <span>{task.text}</span>
          <button onClick={() => deleteTask(task.id)}>✕</button>
        </li>
      ))}
    </ul>
  );
}

export default TaskList;
