import { Link, Outlet } from "react-router-dom";
import "./AuthLayout.css";

function AuthLayout() {
  return (
    <div className="auth-layout">
      <div className="auth-panel">
        <Link to="/" className="auth-logo">
          36 Chosen Careers
        </Link>
        <Outlet />
      </div>
    </div>
  );
}

export default AuthLayout;
