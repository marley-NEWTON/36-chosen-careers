import { useState } from "react";
import { Link } from "react-router-dom";
import useDarkMode from "../hooks/useDarkMode.js";
import useScrollPosition from "../hooks/useScrollPosition.js";
import { useAuth } from "../context/AuthContext.jsx";
import "./Navbar.css";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isDark, toggleDarkMode] = useDarkMode();
  const isScrolled = useScrollPosition(50);
  const { user, logout } = useAuth();

  const toggleMenu = () => setIsOpen((prev) => !prev);

  const handleLogout = () => {
    logout();
    setIsOpen(false);
  };

  return (
    <nav className={`navbar ${isScrolled ? "scrolled" : ""}`}>
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          36 Chosen Careers
        </Link>

        <button
          className="navbar-toggle"
          onClick={toggleMenu}
          aria-label="Toggle navigation menu"
          aria-expanded={isOpen}
        >
          <i className={isOpen ? "fa-solid fa-xmark" : "fa-solid fa-bars"}></i>
        </button>

        <ul className={`navbar-links ${isOpen ? "active" : ""}`}>
          <li>
            <Link to="/" onClick={() => setIsOpen(false)}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/#services" onClick={() => setIsOpen(false)}>
              Services
            </Link>
          </li>

          {user && (
            <li>
              <Link to="/dashboard" onClick={() => setIsOpen(false)}>
                Dashboard
              </Link>
            </li>
          )}

          {!user ? (
            <li>
              <Link to="/login" onClick={() => setIsOpen(false)}>
                Login
              </Link>
            </li>
          ) : (
            <li>
              <button className="logout-btn" onClick={handleLogout}>
                <i className="fa-solid fa-arrow-right-from-bracket"></i> Logout
              </button>
            </li>
          )}

          <li>
            <button
              className="theme-toggle"
              onClick={toggleDarkMode}
              aria-label="Toggle dark mode"
            >
              <i
                className={isDark ? "fa-solid fa-sun" : "fa-solid fa-moon"}
              ></i>
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
