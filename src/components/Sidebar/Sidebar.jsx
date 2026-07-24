import "./Sidebar.css";

import {
  Globe,
  ChartColumn,
  LayoutDashboard,
  Monitor,
  BrainCircuit,
  PlugZap,
  Server,
  ShieldCheck,
  Bell,
  FileText,
  Users,
  KeyRound,
  Settings,
  Settings2,
  Lightbulb,
} from "lucide-react";

function Sidebar({ currentPage , setCurrentPage }) {
  return (
    <div className="sidebar">

      {/* Logo */}
      <div className="logo-section">
        <Globe size={40} className="logo-icon" />

        <div>
          <h2 className="logo">EuroBitAI</h2>
          <p className="logo-subtitle">
            Intelligent Ops Assistant
          </p>
        </div>
      </div>

      {/* ================= OVERVIEW ================= */}

      <div className="menu-group">
        <div className="section-title">
          <ChartColumn size={18} /><span>OVERVIEW</span>
        </div>

        <ul>
          <li
            className={currentPage === "dashboard" ? "active" : ""}
            onClick={() => setCurrentPage("dashboard")}
            >
            <LayoutDashboard size={16} />Dashboard
          </li>


          <li
            className={currentPage === "Monitoring" ? "active" : ""}
            onClick={() => setCurrentPage("Monitoring")}
            >
            <LayoutDashboard size={16} />Monitoring
          </li>
        </ul>

      </div>

      {/* ========== INTELLIGENCE & DATA ========== */}

      <div className="menu-group">

        <div className="section-title">
          <BrainCircuit size={18} /><span>INTELLIGENCE & DATA</span>
        </div>

        <ul>
         <li
            className={currentPage === "KnowledgeSearch" ? "active" : ""}
            onClick={() => setCurrentPage("KnowledgeSearch")}
            >
            <LayoutDashboard size={16} />Knowledge Source
          </li>
           <li
            className={currentPage === "Connector" ? "active" : ""}
            onClick={() => setCurrentPage("Connector")}
            >
            <LayoutDashboard size={16} />My Connector
          </li>
          <li
            className={currentPage === "Infrastructure" ? "active" : ""}
            onClick={() => setCurrentPage("Infrastructure")}
            >
            <LayoutDashboard size={16} />My Infrastructure
          </li>
        </ul>

      </div>

      {/* ========== SECURITY & COMPLIANCE ========== */}

      <div className="menu-group">

        <div className="section-title">
          <ShieldCheck size={18} /><span>SECURITY & COMPLIANCE</span>
        </div>

        <ul>
          <li className={currentPage === "notification" ? "active" : ""}
            onClick={() => setCurrentPage("notification")}
          >
          <Bell size={16} />Notifications</li>
         
          <li
            className={currentPage === "AuditTrail" ? "active" : ""}
            onClick={() => setCurrentPage("AuditTrail")}
            >
            <LayoutDashboard size={16} />Audit Trail
          </li>
        </ul>

      </div>

      {/* ========== MANAGEMENT ========== */}

      <div className="menu-group">

        <div className="section-title">
          <Settings2 size={18} /><span>MANAGEMENT</span>
        </div>

        <ul>
          <li onClick={() => setCurrentPage("users")}>
              <Users size={16}/> Users</li>
          <li
            className={currentPage === "RolePermission" ? "active" : ""}
            onClick={() => setCurrentPage("RolePermission")}
            >
            <LayoutDashboard size={16} />Role & Permissions
          </li>
         <li
            className={currentPage === "Settings" ? "active" : ""}
            onClick={() => setCurrentPage("Settings")}
            >
            <LayoutDashboard size={16} />Settings
          </li>
        </ul>

      </div>


      {/* POWER OF 10 CARD */}

      <div className="power-card">

        <h4>POWER OF 10</h4>

        <p className="power-subtitle">
          10 AI Capabilities.<br />
          One Intelligent Assistant.
        </p>

        <div className="power-number">
          10X
        </div>

        <div className="power-text">
          Smarter Operations<br />
          Faster Resolution<br />
          Better Outcomes
        </div>

        <button
            className="power-btn"
            onClick={() => setCurrentPage("power10")}
        >
            Explore Power of 10 →
        </button>
      </div>

    </div>
  );
}

export default Sidebar;