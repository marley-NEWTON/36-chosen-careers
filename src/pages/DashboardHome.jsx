import { useAuth } from "../context/AuthContext.jsx";
import "./DashboardHome.css";

function DashboardHome() {
  const { user } = useAuth();

  return (
    <div className="dashboard-home">
      <h1>Welcome back{user?.fullName ? `, ${user.fullName}` : ""}</h1>~
      <p className="dashboard-home-subtitle">
        Here's a quick overview of your account.
      </p>

      <div className="card dashboard-home-card">
        <p>
          Use the sidebar to view your orders, update your profile, or change
          your settings.
        </p>
      </div>
    </div>
  );
}

export default DashboardHome;
