import React from "react";
import "./Connector.css";
import connectorData from "./connectorData";

const healthData = [
  { name: "CyberArk", value: 100 },
  { name: "Splunk", value: 95 },
  { name: "LDAP", value: 82 },
  { name: "AI Engine", value: 100 },
];

const Connector = () => {
  return (
    <div className="connector-page">
      <div className="page-header">
        <h2>Connector Management</h2>
        <p>Manage third-party integrations and monitor connector health.</p>
      </div>

      {/* Connector Table */}
      <div className="table-container">
        <h3>Connector Status</h3>

        <table>
          <thead>
            <tr>
              <th>Connector</th>
              <th>Type</th>
              <th>Status</th>
              <th>Last Sync</th>
              <th>Response</th>
              <th>Version</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>
            {connectorData.map((item) => (
              <tr key={item.id}>
                <td>{item.name}</td>

                <td>{item.type}</td>

                <td>
                  <span
                    className={
                      item.status === "Connected"
                        ? "status connected"
                        : "status failed"
                    }
                  >
                    {item.status === "Connected" ? "🟢" : "🔴"}{" "}
                    {item.status}
                  </span>
                </td>

                <td>{item.lastSync}</td>

                <td>{item.response}</td>

                <td>{item.version}</td>

                <td>
                  <button className="action-btn">
                    {item.action}
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Connector Health */}
      <div className="health-section">
        <h3>Connector Health</h3>

        {healthData.map((item, index) => (
          <div className="health-row" key={index}>
            <div className="health-title">
              <span>{item.name}</span>
              <span>{item.value}%</span>
            </div>

            <div className="progress">
              <div
                className="progress-fill"
                style={{ width: `${item.value}%` }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Connector;