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

function Sidebar() {
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
          <li className="active">
            <LayoutDashboard size={16} /> Dashboard
          </li>

          <li>
            <Monitor size={16} />Monitoring
          </li>
        </ul>

      </div>

      {/* ========== INTELLIGENCE & DATA ========== */}

      <div className="menu-group">

        <div className="section-title">
          <BrainCircuit size={18} /><span>INTELLIGENCE & DATA</span>
        </div>

        <ul>
          <li><Lightbulb size={16} />Knowledge Sources</li>
          <li><PlugZap size={16} />My Connectors</li>
          <li><Server size={16} />My Infrastructure</li>
        </ul>

      </div>

      {/* ========== SECURITY & COMPLIANCE ========== */}

      <div className="menu-group">

        <div className="section-title">
          <ShieldCheck size={18} /><span>SECURITY & COMPLIANCE</span>
        </div>

        <ul>
          <li><Bell size={16} /> Notifications</li>
          <li><FileText size={16} />Audit Trail</li>
        </ul>

      </div>

      {/* ========== MANAGEMENT ========== */}

      <div className="menu-group">

        <div className="section-title">
          <Settings2 size={18} /><span>MANAGEMENT</span>
        </div>

        <ul>
          <li><Users size={16}/>Users</li>
          <li><KeyRound size={16} />Role & Permissions</li>
          <li><Settings size={16} />Settings</li>
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

        <button className="power-btn" >Explore Power of 10 →</button>

      </div>

    </div>
  );
}

export default Sidebar;