import "./Navbar.css";
import { useState } from "react";
import {
  Search,
  Bell,
  CircleUserRound,
  User,
  Settings,
  Info,
  LogOut,
} from "lucide-react";

function Navbar({ setCurrentPage }) {
  const [showMenu, setShowMenu] = useState(false);

  const handleUserClick = (e) => {
    e.stopPropagation();
    setShowMenu((prev) => !prev);
  };

  return (
    <div className="navbar">
      <div className="navbar-right">
        {/* Search Box */}
        <div className="search-box">
          <Search size={18} />
          <input type="text" placeholder="Search..." />
        </div>

        {/* Notification */}
        <div
          className="notification"
          onClick={() => setCurrentPage("notification")}
        >
          <Bell size={22} />
          <span className="notification-dot"></span>
        </div>

        {/* User Profile */}
        <div className="user-profile">
          <div className="user-info" onClick={handleUserClick}>
            <CircleUserRound size={30} className="user-icon" />
            <span className="user-name">Kapil Gandhi</span>
          </div>

          {showMenu && (
            <div className="profile-dropdown">
              <div className="dropdown-item">
                <User size={18} />
                <span>Profile</span>
              </div>

              <div className="dropdown-item">
                <Settings size={18} />
                <span>Settings</span>
              </div>

              <div className="dropdown-item">
                <Info size={18} />
                <span>About</span>
              </div>

              <hr />

              {/* ✅ Fixed Sign Out */}
              <div
                className="dropdown-item logout"
                onClick={() => setCurrentPage("login")}
              >
                <LogOut size={18} />
                <span>Sign Out</span>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Navbar;
