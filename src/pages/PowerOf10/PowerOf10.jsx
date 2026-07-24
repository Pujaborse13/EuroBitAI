import "./PowerOf10.css";
import CapabilityCard from "../../components/CapabilityCard/CapabilityCard";

import Architecture from "../../assets/Architecture.png";
import TechStack from "../../assets/TechStack.png";
import CapabilityImage from "../../assets/CapabilityImage.png";


import {
  Bot,
  MessageSquare,
  BookOpen,
  Monitor,
  AlertTriangle,
  Ticket,
  TrendingUp,
  Zap,
  FileText,
  Bell,
  BrainCircuit,
} from "lucide-react";

function PowerOf10() {
  return (
    <div className="power-container">

      {/* ================= TITLE ================= */}

      <div className="title">
        <h1>THE POWER OF 10</h1>
        <p>Ten Intelligent Capabilities. One AI Assistant.</p>
      </div>


      {/* ================= POWER OF 10 CAPABILITIES ================= */}

      <section className="capabilities-section">

      <div className="capability-image-card">

    <img
      src={CapabilityImage}
      alt="AI Capabilities"
      className="capability-image"
    />

  </div>

      </section>


      {/* ================= SYSTEM ARCHITECTURE ================= */}

      <section className="architecture-section">

        <div className="title">
          <h2>SYSTEM ARCHITECTURE</h2>
          <p>
            Scalable, secure, and intelligent enterprise architecture.
          </p>
        </div>

        <div className="architecture-card">

          <img
            src={Architecture}
            alt="AI System Architecture"
            className="architecture-image"
          />

        </div>

      </section>


      {/* ================= WORKFLOW / TECH STACK ================= */}

      <section className="tech-section">

        <div className="title">
          <h2>WORKFLOW</h2>
          <p>
            Plan smarter. Execute faster. Achieve more.
          </p>
        </div>


        <div className="tech-card">

          <img
            src={TechStack}
            alt="Technology Workflow"
            className="tech-image"
          />

        </div>

      </section>


    </div>
  );
}

export default PowerOf10;