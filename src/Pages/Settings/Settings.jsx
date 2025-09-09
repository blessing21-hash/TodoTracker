// import { useState } from "react";

// function Settings() {
//   const [darkMode, setDarkMode] = useState(true);
//   const [notifications, setNotifications] = useState(false);

//   return (
//     <div>
//       <h2>Settings</h2>
//       <label>
//         <input
//           type="checkbox"
//           checked={darkMode}
//           onChange={() => setDarkMode(!darkMode)}
//         />
//         Dark Mode
//       </label>
//       <br />
//       <label>
//         <input
//           type="checkbox"
//           checked={notifications}
//           onChange={() => setNotifications(!notifications)}
//         />
//         Notifications
//       </label>
//       <br />
//       <button>Clear All Tasks</button>
//     </div>
//   );
// }

// export default Settings;






// import "./Stats.css";

// function Stats({ tasks }) {
//   const totalTasks = tasks.length;
//   const completedTasks = tasks.filter((t) => t.completed).length;
//   const remainingTasks = totalTasks - completedTasks;

//   // Calculate a simple streak: consecutive days with at least one completed task
//   // For now, we’ll simulate with total completed tasks
//   const streak = completedTasks; 

//   return (
//     <div className="stats-container">
//       <h2>Productivity Stats</h2>

//       <div className="stat-card">
//         <h3>Total Tasks</h3>
//         <p>{totalTasks}</p>
//       </div>

//       <div className="stat-card">
//         <h3>Completed Tasks</h3>
//         <p>{completedTasks}</p>
//       </div>

//       <div className="stat-card">
//         <h3>Remaining Tasks</h3>
//         <p>{remainingTasks}</p>
//       </div>

//       <div className="stat-card">
//         <h3>Current Streak</h3>
//         <p>{streak} day{streak !== 1 ? "s" : ""}</p>
//       </div>
//     </div>
//   );
// }

// export default Stats;





import { useState, useEffect } from "react";
import "./Settings.css";

function Settings({ darkMode, setDarkMode, clearTasks, notifications, setNotifications }) {
  return (
    <div className="settings-container">
      <h2>Settings</h2>

      <div className="setting-item">
        <label>
          <input
            type="checkbox"
            checked={darkMode}
            onChange={() => setDarkMode(!darkMode)}
          />
          Dark Mode
        </label>
      </div>

      <div className="setting-item">
        <label>
          <input
            type="checkbox"
            checked={notifications}
            onChange={() => setNotifications(!notifications)}
          />
          Notifications
        </label>
      </div>

      <div className="setting-item">
        <button onClick={clearTasks}>Clear All Tasks</button>
      </div>
    </div>
  );
}

export default Settings;
