import "./Navbar.css";
import {
  Search,
  Bell,
  CircleUserRound,
} from "lucide-react";

function Navbar() {
  return (
    <div className="navbar">

      {/* Right Side */}
      <div className="navbar-right">

        {/* Search Box */}
        <div className="search-box">
          <Search size={18} /><input type="text" placeholder="Search..."/>
        </div>

        {/* Notification */}
        <div className="notification">
          <Bell size={22} /><span className="notification-dot"></span>
        </div>

        {/* User Profile */}
        <div className="user-profile">
          <CircleUserRound size={24} className="user-icon" /><span className="user-name">Kapil Gandhi</span>
        </div>
        
      </div>

    </div>
  );
}

export default Navbar;