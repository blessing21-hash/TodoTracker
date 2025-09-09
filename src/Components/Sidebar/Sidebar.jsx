// import { Link } from "react-router-dom";
// import "./Sidebar.css";

// function Sidebar() {
//   return (
//     <aside className="sidebar">
//       <h1>🌙 Todo Tracker</h1>
//       <nav>
//         <Link to="/">Home</Link>
//         <Link to="/stats">Stats</Link>
//         <Link to="/settings">Settings</Link>
//         <Link to="/about">About</Link>
//       </nav>
//     </aside>
//   );
// }

// export default Sidebar;




import { NavLink } from "react-router-dom";
import "./Sidebar.css";

function Sidebar() {
  return (
    <aside className="sidebar">
      <h1>🌙 Todo Tracker</h1>
      <nav className="sidebar-nav">
        <NavLink to="/" className={({ isActive }) => isActive ? "active" : ""}>
          Home
        </NavLink>
        <NavLink to="/stats" className={({ isActive }) => isActive ? "active" : ""}>
          Stats
        </NavLink>
        <NavLink to="/settings" className={({ isActive }) => isActive ? "active" : ""}>
          Settings
        </NavLink>
        <NavLink to="/about" className={({ isActive }) => isActive ? "active" : ""}>
          About
        </NavLink>
      </nav>
    </aside>
  );
}

export default Sidebar;
