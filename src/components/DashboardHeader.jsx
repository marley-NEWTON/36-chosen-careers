import { Link } from "react-router-dom";
import NotificationsDropdown from "./NotificationsDropdown.jsx";
import "./DashboardHeader.css";

function DashboardHeader({ onMenuClick }) {
  return (
    <header className="dashboard-header">
      <button
        className="dashboard-menu-toggle"
        onClick={onMenuClick}
        aria-label="Open sidebar menu"
      >
        <i className="fa-solid fa-bars"></i>
      </button>

      <Link to="/" className="dashboard-home-link">
        <i className="fa-solid fa-house"></i> Back to Home
      </Link>

      <div className="dashboard-header-spacer"></div>
      <NotificationsDropdown />
    </header>
  );
}

export default DashboardHeader;
