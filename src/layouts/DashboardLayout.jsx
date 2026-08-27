import { useState } from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar.jsx";
import DashboardHeader from "../components/DashboardHeader.jsx";
import "./DashboardLayout.css";

function DashboardLayout() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="dashboard-layout">
      <Sidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />
      <main className="dashboard-content">
        <DashboardHeader onMenuClick={() => setIsSidebarOpen(true)} />
        <Outlet />
      </main>
    </div>
  );
}

export default DashboardLayout;
