




// import { useState } from "react";
// import { Routes, Route } from "react-router-dom";
// import Sidebar from "./components/Sidebar";
// import Home from "./pages/Home";
// import About from "./pages/About";
// import Settings from "./pages/Settings";
// import Stats from "./pages/Stats";
// import "./App.css";

// function App() {
//   const [tasks, setTasks] = useState([]);

//   const addTask = (text) => {
//     if (!text.trim()) return;
//     setTasks([...tasks, { id: Date.now(), text, completed: false }]);
//   };

//   const toggleTask = (id) => {
//     setTasks(
//       tasks.map((task) =>
//         task.id === id ? { ...task, completed: !task.completed } : task
//       )
//     );
//   };

//   const deleteTask = (id) => {
//     setTasks(tasks.filter((task) => task.id !== id));
//   };

//   return (
//     <div className="app">
//       <Sidebar />
//       <main className="main">
//         <Routes>
//           <Route
//             path="/"
//             element={
//               <Home
//                 tasks={tasks}
//                 addTask={addTask}
//                 toggleTask={toggleTask}
//                 deleteTask={deleteTask}
//               />
//             }
//           />
//           <Route path="/about" element={<About />} />
//           <Route path="/settings" element={<Settings />} />
//           <Route path="/stats" element={<Stats tasks={tasks} />} />
//         </Routes>
//       </main>
//     </div>
//   );
// }

// export default App;





import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState } from "react";
import Sidebar from "./Components/Sidebar/Sidebar";
import Home from "./Pages/Home/Home";
import Stats from "./Pages/Stats/Stats";
import Settings from "./Pages/Settings/Settings";
import About from "./Pages/About/About";
import "./App.css";

function App() {
  const [tasks, setTasks] = useState(() => {
    const saved = localStorage.getItem("tasks");
    return saved ? JSON.parse(saved) : [];
  });

  const [darkMode, setDarkMode] = useState(true);
  const [notifications, setNotifications] = useState(false);

  // Save tasks in localStorage
  const saveTasks = (newTasks) => {
    setTasks(newTasks);
    localStorage.setItem("tasks", JSON.stringify(newTasks));
  };

  const addTask = (text) => {
    if (!text.trim()) return;
    saveTasks([...tasks, { id: Date.now(), text, completed: false }]);
  };

  const toggleTask = (id) => {
    saveTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const deleteTask = (id) => {
    saveTasks(tasks.filter((task) => task.id !== id));
  };

  const clearTasks = () => {
    saveTasks([]);
  };

  return (
    <div className={`app ${darkMode ? "dark" : "light"}`}>
      <Sidebar />
      <main className="main-content">
        <Routes>
          <Route
            path="/"
            element={
              <Home
                tasks={tasks}
                addTask={addTask}
                toggleTask={toggleTask}
                deleteTask={deleteTask}
              />
            }
          />
          <Route path="/stats" element={<Stats tasks={tasks} />} />
          <Route
            path="/settings"
            element={
              <Settings
                darkMode={darkMode}
                setDarkMode={setDarkMode}
                clearTasks={clearTasks}
                notifications={notifications}
                setNotifications={setNotifications}
              />
            }
          />
          <Route path="/about" element={<About />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
