// function About() {
//   return (
//     <div>
//       <h2>About Todo Tracker</h2>
//       <p>
//         This app helps you track your daily tasks, build streaks, and stay
//         productive. Designed by Blessy 🚀
//       </p>
//     </div>
//   );
// }

// export default About;







import "./About.css";

function About() {
  return (
    <div className="about-container">
      <h2>About Todo Tracker</h2>
      <p>
        Todo Tracker is a modern, dark-mode friendly productivity app designed to help you manage your daily tasks, build streaks, and stay focused. Add tasks, complete them, track your productivity, and personalize your experience in settings.
      </p>
    <div className="about-card">
      <h3>Features:</h3>
      <ul>
        <li>Add, complete, and delete tasks</li>
        <li>Dark / Light mode toggle</li>
        <li>Notifications (coming soon)</li>
        <li>Productivity stats and streak tracking</li>
      </ul>
    </div>

    <div className="about-card">
      <h3>Developer:</h3>
      <p>Blessing Kusiwani 🚀</p>

      <h3>Version:</h3>
      <p>1.0.0</p>
    </div>

    </div>
  );
}

export default About;
