import React from "react";
import "./Monitoring.css";
import { summaryCards, infrastructure, services, alerts } from "./monitoringData";

const Monitoring = () => {
  const getStatusClass = (status) => {
    switch (status) {
      case "Healthy":
      case "Completed":
        return "status healthy";
      case "Warning":
      case "Running":
        return "status warning";
      case "Critical":
      case "Failed":
        return "status critical";
      default:
        return "status";
    }
  };

  return (
    <div className="monitoring-page">
      {/* Header */}
      <div className="page-header">
        <div>
          <h2>Infrastructure Monitoring</h2>
          <p>Real-time health of all enterprise services</p>
        </div>
        <button className="refresh-btn">⟳ Refresh</button>
      </div>

      {/* Summary Cards */}
      <div className="summary-grid">
        {summaryCards.map((card, index) => (
          <div
            className="summary-card"
            key={index}
            style={{ borderTop: `4px solid ${card.color}` }}
          >
            <div className="summary-icon">{card.icon}</div>
            <div>
              <h3>{card.value}</h3>
              <p>{card.title}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Infrastructure Health */}
      <div className="section">
        <h3 className="section-title">Infrastructure Health</h3>
        <div className="infra-grid">
          {infrastructure.map((item, index) => (
            <div className="infra-card" key={index}>
              <div className="infra-header">
                <span>{item.name}</span>
                <span>{item.value}%</span>
              </div>
              <div className="progress-bar">
                <div
                  className="progress-fill"
                  style={{ width: `${item.value}%`, background: item.color }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Live Services */}
      <div className="full-width-card">
        <div className="card-header">
          <h3>Live Services</h3>
         <br></br>
        </div>
        <table>
          <thead>
            <tr>
              <th>Service</th>
              <th>Status</th>
              <th>Response</th>
            </tr>
          </thead>
          <tbody>
            {services.map((service, index) => (
              <tr key={index}>
                <td>{service.name}</td>
                <td>
                  <span className={getStatusClass(service.status)}>
                    {service.status}
                  </span>
                </td>
                <td>{service.response}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Active Alerts - Full Page Table */}
      <div className="full-width-card">
        <div className="card-header">
          <h3>Active Alerts</h3>
         
        </div>
        <table className="alerts-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Status</th>
              <th>Time</th>
            </tr>
          </thead>
          <tbody>
            {alerts.map((alert, index) => (
              <tr key={index}>
                <td>{alert.title}</td>
                <td>
                  <span className={getStatusClass(alert.severity)}>
                    {alert.severity}
                  </span>
                </td>
                <td>{alert.time}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Monitoring;
