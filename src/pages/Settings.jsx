import { useState } from "react";
import {
  validatePassword,
  validateConfirmPassword,
} from "../utils/validators.js";
import useDarkMode from "../hooks/useDarkMode.js";
import "./Settings.css";

function Settings() {
  const [isDark, toggleDarkMode] = useDarkMode();
  const [passwordData, setPasswordData] = useState({
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setPasswordData({ ...passwordData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {
      newPassword: validatePassword(passwordData.newPassword),
      confirmPassword: validateConfirmPassword(
        passwordData.newPassword,
        passwordData.confirmPassword,
      ),
    };
    setErrors(newErrors);
    if (Object.values(newErrors).some((err) => err !== "")) return;

    console.log("Password change submitted:", passwordData);
  };

  return (
    <div className="settings-page">
      <h1>Settings</h1>
      <p className="settings-subtitle">Manage your account preferences</p>

      <div className="card settings-section">
        <h2>Appearance</h2>
        <div className="settings-row">
          <span>Dark Mode</span>
          <button
            className={`toggle-switch ${isDark ? "on" : ""}`}
            onClick={toggleDarkMode}
            aria-label="Toggle dark mode"
          >
            <span className="toggle-knob"></span>
          </button>
        </div>
      </div>

      <form className="card settings-section" onSubmit={handleSubmit}>
        <h2>Change Password</h2>

        <label htmlFor="currentPassword">Current Password</label>
        <input
          type="password"
          id="currentPassword"
          name="currentPassword"
          value={passwordData.currentPassword}
          onChange={handleChange}
        />

        <label htmlFor="newPassword">New Password</label>
        <input
          type="password"
          id="newPassword"
          name="newPassword"
          value={passwordData.newPassword}
          onChange={handleChange}
          className={errors.newPassword ? "input-error" : ""}
        />
        {errors.newPassword && (
          <span className="field-error">{errors.newPassword}</span>
        )}

        <label htmlFor="confirmPassword">Confirm New Password</label>
        <input
          type="password"
          id="confirmPassword"
          name="confirmPassword"
          value={passwordData.confirmPassword}
          onChange={handleChange}
          className={errors.confirmPassword ? "input-error" : ""}
        />
        {errors.confirmPassword && (
          <span className="field-error">{errors.confirmPassword}</span>
        )}

        <button type="submit" className="btn-primary settings-submit">
          Update Password
        </button>
      </form>
    </div>
  );
}

export default Settings;
