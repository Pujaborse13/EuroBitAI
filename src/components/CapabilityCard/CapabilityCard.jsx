import "./CapabilityCard.css";

function CapabilityCard({ icon, title, desc, color, className = "" }) {
  return (
    <div className={`capability-card ${className}`}>

      <div
        className="icon-box"
        style={{ background: color }}
      >
        {icon}
      </div>

      <div className="card-content">
        <h3>{title}</h3>
        <p>{desc}</p>
      </div>

    </div>
  );
}

export default CapabilityCard;