import { useState, useRef, useEffect } from "react";
import notifications from "../data/notifications.js";
import "./NotificationsDropdown.css";

function NotificationsDropdown() {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const unreadCount = notifications.filter((n) => n.unread).length;

  useEffect(() => {
    function handleClickOutside(e) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="notifications" ref={dropdownRef}>
      <button
        className="notifications-bell"
        onClick={() => setIsOpen((prev) => !prev)}
        aria-label="Toggle notifications"
        aria-expanded={isOpen}
      >
        <i className="fa-solid fa-bell"></i>
        {unreadCount > 0 && (
          <span className="notifications-badge">{unreadCount}</span>
        )}
      </button>

      {isOpen && (
        <div className="notifications-panel">
          <div className="notifications-header">Notifications</div>

          {notifications.length === 0 ? (
            <p className="notifications-empty">No notifications yet.</p>
          ) : (
            <ul className="notifications-list">
              {notifications.map((n) => (
                <li key={n.id} className={n.unread ? "unread" : ""}>
                  <p>{n.message}</p>
                  <span>{n.time}</span>
                </li>
              ))}
            </ul>
          )}
        </div>
      )}
    </div>
  );
}

export default NotificationsDropdown;
