// import TaskInput from "../components/TaskInput";
// import TaskList from "../components/TaskList";

// function Home({ tasks, addTask, toggleTask, deleteTask }) {
//   return (
//     <div>
//       <TaskInput addTask={addTask} />
//       <TaskList tasks={tasks} toggleTask={toggleTask} deleteTask={deleteTask} />
//     </div>
//   );
// }

// export default Home;





import { useState, useEffect } from "react";
import "./Home.css";

function Home() {
  const [tasks, setTasks] = useState(() => {
    // Load tasks from localStorage if available
    const saved = localStorage.getItem("tasks");
    return saved ? JSON.parse(saved) : [];
  });

  const [input, setInput] = useState("");

  // Save tasks to localStorage whenever tasks change
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const addTask = (e) => {
    e.preventDefault();
    if (!input.trim()) return;
    setTasks([...tasks, { id: Date.now(), text: input, completed: false }]);
    setInput("");
  };

  const toggleTask = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const remaining = tasks.filter((t) => !t.completed).length;

  return (
    <div className="home-container">
      <h2>Your Tasks</h2>
      <form className="task-input" onSubmit={addTask}>
        <input
          type="text"
          placeholder="Add a new task..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button type="submit">+</button>
      </form>

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

      <div className="task-footer">
        {remaining} task{remaining !== 1 ? "s" : ""} remaining
      </div>
    </div>
  );
}

export default Home;
