import "./Settings.css";
import { useState } from "react";
import {
  User,
  Mail,
  Shield,
  Bell,
  KeyRound,
} from "lucide-react";

function Settings() {
  const [emailNotification, setEmailNotification] = useState(true);
  const [loginAlert, setLoginAlert] = useState(true);

  return (
    <div className="settings-page">

      <div className="settings-header">
        <h2>Settings</h2>
        <p>Manage your account preferences and security settings.</p>
      </div>

      {/* User Information */}

      <div className="setting-card">

        <div className="card-title">
          <User size={22} />
          <h3>User Information</h3>
        </div>

        <div className="grid">

          <div>
            <label>Name</label>
            <input type="text" value="Kapil Gandhi" readOnly />
          </div>

          <div>
            <label>Role</label>
            <input type="text" value="Administrator" readOnly />
          </div>

          <div>
            <label>Email</label>
            <input type="email" value="kapil.gandhi@eurobit.ai" readOnly />
          </div>

        </div>

      </div>

      {/* Notifications */}

      <div className="setting-card">

        <div className="card-title">
          <Bell size={22} />
          <h3>Notifications</h3>
        </div>

        <div className="toggle-row">

          <div>
            <h4>Email Notifications</h4>
            <p>Receive email alerts for important system events.</p>
          </div>

          <label className="switch">
            <input
              type="checkbox"
              checked={emailNotification}
              onChange={() => setEmailNotification(!emailNotification)}
            />
            <span className="slider"></span>
          </label>

        </div>

      </div>

      {/* Security */}

      <div className="setting-card">

        <div className="card-title">
          <Shield size={22} />
          <h3>Security</h3>
        </div>

        <div className="toggle-row">

          <div>
            <h4>Login Alerts</h4>
            <p>Notify me whenever a new login is detected.</p>
          </div>

          <label className="switch">
            <input
              type="checkbox"
              checked={loginAlert}
              onChange={() => setLoginAlert(!loginAlert)}
            />
            <span className="slider"></span>
          </label>

        </div>

        <div className="security-grid">

          <div className="info-box">
            <KeyRound size={18} />
            <div>
              <span>Last Password Change</span>
              <strong>15 Jul 2026</strong>
            </div>
          </div>

          <button className="reset-btn">
            Reset Password
          </button>

        </div>

      </div>

      <div className="button-group">
        <button className="cancel-btn">
          Cancel
        </button>

        <button className="save-btn">
          Save Changes
        </button>
      </div>

    </div>
  );
}

export default Settings;