import { NavLink } from "react-router-dom";
import "./Sidebar.css";

function Sidebar() {
  const menuItems = [
    {
      label: "Dashboard",
      path: "/",
      icon: "📊",
    },
    {
      label: "Users",
      path: "/users",
      icon: "👥",
    },
    {
      label: "Products",
      path: "/products",
      icon: "📦",
    },
    {
      label: "Settings",
      path: "/settings",
      icon: "⚙️",
    },
  ];

  return (
    <aside className="sidebar">
      <div className="sidebar-menu">
        {menuItems.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            className={({ isActive }) =>
              `sidebar-link ${isActive ? "active" : ""}`
            }
          >
            <span className="sidebar-icon">{item.icon}</span>

            <span className="sidebar-label">{item.label}</span>
          </NavLink>
        ))}
      </div>
    </aside>
  );
}

export default Sidebar;
