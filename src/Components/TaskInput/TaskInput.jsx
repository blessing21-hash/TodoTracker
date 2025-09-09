import React, { useState } from "react";
import "./TaskInput.css";

function TaskInput({ addTask }) {
  const [text, setText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    addTask(text);
    setText("");
  };

  return (
    <form className="task-input" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Add a new task..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button type="submit">+</button>
    </form>
  );
}

export default TaskInput;
