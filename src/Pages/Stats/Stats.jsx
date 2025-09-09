
import "./Stats.css";

function Stats({ tasks }) {
  const totalTasks = tasks.length;
  const completedTasks = tasks.filter((t) => t.completed).length;
  const remainingTasks = totalTasks - completedTasks;

  const streak = completedTasks; 

  return (
    <div className="stats-container">
      <h2>Productivity Stats</h2>

      <div className="stat-card">
        <h3>Total Tasks</h3>
        <p>{totalTasks}</p>
      </div>

      <div className="stat-card">
        <h3>Completed Tasks</h3>
        <p>{completedTasks}</p>
      </div>

      <div className="stat-card">
        <h3>Remaining Tasks</h3>
        <p>{remainingTasks}</p>
      </div>

      <div className="stat-card">
        <h3>Current Streak</h3>
        <p>{streak} day{streak !== 1 ? "s" : ""}</p>
      </div>
    </div>
  );
}

export default Stats;
