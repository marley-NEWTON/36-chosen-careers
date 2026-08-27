import { NavLink } from "react-router-dom";
import { useAuth } from "../context/AuthContext.jsx";
import "./Sidebar.css";

const baseNavItems = [
  { to: "/dashboard", icon: "fa-solid fa-gauge", label: "Overview", end: true },
  {
    to: "/dashboard/orders",
    icon: "fa-solid fa-file-lines",
    label: "My Orders",
  },
  { to: "/dashboard/profile", icon: "fa-solid fa-user", label: "Profile" },
  { to: "/dashboard/settings", icon: "fa-solid fa-gear", label: "Settings" },
];

const adminNavItem = {
  to: "/dashboard/admin-orders",
  icon: "fa-solid fa-shield-halved",
  label: "Admin Orders",
};

function Sidebar({ isOpen, onClose }) {
  const { user } = useAuth();
  const navItems =
    user?.role === "admin" ? [...baseNavItems, adminNavItem] : baseNavItems;

  return (
    <>
      {isOpen && <div className="sidebar-overlay" onClick={onClose}></div>}

      <aside className={`sidebar ${isOpen ? "open" : ""}`}>
        <div className="sidebar-logo">36 Chosen Careers</div>

        <nav className="sidebar-nav">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.end}
              onClick={onClose}
              className={({ isActive }) =>
                `sidebar-link ${isActive ? "active" : ""}`
              }
            >
              <i className={item.icon}></i>
              <span>{item.label}</span>
            </NavLink>
          ))}
        </nav>
      </aside>
    </>
  );
}

export default Sidebar;
