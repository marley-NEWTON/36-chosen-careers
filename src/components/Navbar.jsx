import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import useDarkMode from "../hooks/useDarkMode.js";
import useScrollPosition from "../hooks/useScrollPosition.js";
import { useAuth } from "../context/AuthContext.jsx";
import { useLanguage } from "../context/LanguageContext.jsx";
import "./Navbar.css";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isDark, toggleDarkMode] = useDarkMode();

  const isScrolled = useScrollPosition(30);
  const { user, logout } = useAuth();
  const { language, changeLanguage, t } = useLanguage();
  const location = useLocation();

  const closeMenu = () => setIsOpen(false);

  const handleLogout = () => {
    logout();
    closeMenu();
  };

  const isActive = (path) => location.pathname === path;

  const toggleLanguage = () => {
    changeLanguage(language === "en" ? "sw" : "en");
  };

  return (
    <header
      className={`navbar ${isScrolled ? "scrolled" : ""} ${
        isOpen ? "menu-open" : ""
      }`}
    >
      <div className="navbar-container">
        <Link
          to="/"
          className="navbar-logo"
          aria-label="36 Chosen Careers home"
          onClick={closeMenu}
        >
          <span className="navbar-logo-mark">36</span>

          <span className="navbar-logo-copy">
            <span className="navbar-logo-name">CHOSEN CAREERS</span>
            <span className="navbar-logo-tagline">
              {t({
                en: "Your Career. Our Priority.",
                sw: "Kazi Yako. Kipaumbele Chetu.",
              })}
            </span>
          </span>
        </Link>

        <button
          type="button"
          className="navbar-toggle"
          onClick={() => setIsOpen((prev) => !prev)}
          aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={isOpen}
          aria-controls="main-navigation"
        >
          <i
            className={isOpen ? "fa-solid fa-xmark" : "fa-solid fa-bars"}
            aria-hidden="true"
          />
        </button>

        <nav
          id="main-navigation"
          className={`navbar-navigation ${isOpen ? "active" : ""}`}
          aria-label="Main navigation"
        >
          <ul className="navbar-links">
            <li>
              <Link
                to="/"
                className={isActive("/") ? "active" : ""}
                onClick={closeMenu}
              >
                {t({ en: "Home", sw: "Nyumbani" })}
              </Link>
            </li>

            <li>
              <Link to="/#services" onClick={closeMenu}>
                {t({ en: "Services", sw: "Huduma" })}
              </Link>
            </li>

            <li>
              <Link to="/#templates" onClick={closeMenu}>
                {t({ en: "Templates", sw: "Miundo ya CV" })}
              </Link>
            </li>

            <li>
              <Link to="/#about" onClick={closeMenu}>
                {t({ en: "About", sw: "Kuhusu Sisi" })}
              </Link>
            </li>

            <li>
              <Link to="/#faq" onClick={closeMenu}>
                {t({ en: "FAQ", sw: "Maswali" })}
              </Link>
            </li>

            <li>
              <Link to="/#contact" onClick={closeMenu}>
                {t({ en: "Contact", sw: "Wasiliana Nasi" })}
              </Link>
            </li>

            {user && (
              <li>
                <Link to="/dashboard" onClick={closeMenu}>
                  {t({ en: "Dashboard", sw: "Dashibodi" })}
                </Link>
              </li>
            )}
          </ul>

          <div className="navbar-actions">
            <button
              type="button"
              className="language-toggle"
              onClick={toggleLanguage}
              aria-label={
                language === "en"
                  ? "Badilisha lugha iwe Kiswahili"
                  : "Switch language to English"
              }
              title={
                language === "en"
                  ? "Badilisha lugha iwe Kiswahili"
                  : "Switch language to English"
              }
            >
              <i className="fa-solid fa-globe" aria-hidden="true" />
              <span>{language === "en" ? "SW Kiswahili" : "EN English"}</span>
            </button>

            <button
              type="button"
              className="theme-toggle"
              onClick={toggleDarkMode}
              aria-label={
                isDark ? "Switch to light mode" : "Switch to dark mode"
              }
              title={isDark ? "Light mode" : "Dark mode"}
            >
              <i
                className={isDark ? "fa-solid fa-sun" : "fa-solid fa-moon"}
                aria-hidden="true"
              />
            </button>

            {user ? (
              <button
                type="button"
                className="navbar-cta navbar-logout"
                onClick={handleLogout}
              >
                <i
                  className="fa-solid fa-arrow-right-from-bracket"
                  aria-hidden="true"
                />
                {t({ en: "Logout", sw: "Ondoka" })}
              </button>
            ) : (
              <Link to="/login" className="navbar-login" onClick={closeMenu}>
                {t({ en: "Login", sw: "Ingia" })}
              </Link>
            )}

            <Link
              to={user ? "/dashboard" : "/#services"}
              className="navbar-cta"
              onClick={closeMenu}
            >
              {t({ en: "Create Your CV", sw: "Tengeneza CV Yako" })}
              <i className="fa-solid fa-arrow-right" aria-hidden="true" />
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
