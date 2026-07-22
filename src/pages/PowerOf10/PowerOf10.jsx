import "./PowerOf10.css";
import CapabilityCard from "../../components/CapabilityCard/CapabilityCard";

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

      <div className="title">
        <h1>THE POWER OF 10</h1>
        <p>Ten Intelligent Capabilities. One AI Assistant.</p>
      </div>

      <div className="power-circle-wrapper">

        {/* TOP */}
        <CapabilityCard
        className="card card1"
        icon={<MessageSquare size={22} />}
        title="Ask AI"
        desc="Natural language conversations"
        color="#1E88E5"
    />

        {/* TOP RIGHT */}
        <div className="card card2">
          <CapabilityCard
            icon={<BookOpen size={22} />}
            title="Knowledge Search"
            desc="Enterprise Knowledge"
            color="#8E44AD"
          />
        </div>

        {/* RIGHT UPPER */}
        <div className="card card3">
          <CapabilityCard
            icon={<Monitor size={22} />}
            title="Live Monitoring"
            desc="Infrastructure Visibility"
            color="#26A69A"
          />
        </div>

        {/* RIGHT LOWER */}
        <div className="card card4">
          <CapabilityCard
            icon={<Bell size={22} />}
            title="Intelligent Alerts"
            desc="Noise Free Alerts"
            color="#EC407A"
          />
        </div>

        {/* BOTTOM RIGHT */}
        <div className="card card5">
          <CapabilityCard
            icon={<Zap size={22} />}
            title="Automation"
            desc="One-click Runbooks"
            color="#00C853"
          />
        </div>

        {/* BOTTOM */}
        <div className="card card6">
          <CapabilityCard
            icon={<TrendingUp size={22} />}
            title="Predictive Analytics"
            desc="Forecast Problems"
            color="#3949AB"
          />
        </div>

        {/* BOTTOM LEFT */}
        <div className="card card7">
          <CapabilityCard
            icon={<Ticket size={22} />}
            title="Smart Ticketing"
            desc="Auto Ticket Creation"
            color="#7B1FA2"
          />
        </div>

        {/* LEFT LOWER */}
        <div className="card card8">
          <CapabilityCard
            icon={<FileText size={22} />}
            title="AI Reports"
            desc="RCA & Summaries"
            color="#5E35B1"
          />
        </div>

        {/* LEFT UPPER */}
            <div className="card card9">
                <CapabilityCard
                    icon={<AlertTriangle size={22} />}
                    title="Incident Management"
                    desc="Prioritize & Resolve"
                    color="#EF5350"
                />
            </div>

        {/* TOP LEFT */}
        <div className="card card10">
          <CapabilityCard
            icon={<BrainCircuit size={22} />}
            title="Continuous Learning"
            desc="Learns From Actions"
            color="#1565C0"
          />
        </div>

        {/* CENTER CIRCLE */}

        <div className="outer-circle">

          <div className="inner-circle">

            <h1>10</h1>

            <Bot size={46} color="#2F80ED" />

            <h3>AI10 OPS</h3>

            <p>Your Intelligent IT Partner</p>

          </div>

        </div>

      </div>

    </div>
  );
}

export default PowerOf10;