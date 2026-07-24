import React, { useEffect, useState } from "react";
import "./Infrastructure.css";

const initialServers = [
  {
    id: 1,
    host: "app-prod-01",
    env: "Production",
    type: "Application",
    status: "Healthy",
    cpu: 35,
    memory: 62,
  },
  {
    id: 2,
    host: "db-prod-01",
    env: "Production",
    type: "PostgreSQL",
    status: "Healthy",
    cpu: 48,
    memory: 71,
  },
  {
    id: 3,
    host: "api-prod-01",
    env: "Production",
    type: "API",
    status: "Healthy",
    cpu: 25,
    memory: 55,
  },
  {
    id: 4,
    host: "redis-01",
    env: "Production",
    type: "Redis",
    status: "Healthy",
    cpu: 12,
    memory: 41,
  },
  {
    id: 5,
    host: "kafka-01",
    env: "Production",
    type: "Kafka",
    status: "Warning",
    cpu: 72,
    memory: 64,
  },
  {
    id: 6,
    host: "web-01",
    env: "Production",
    type: "Nginx",
    status: "Healthy",
    cpu: 19,
    memory: 32,
  },
];

export default function Infrastructure() {
  const [servers, setServers] = useState(initialServers);

  useEffect(() => {
    const timer = setInterval(() => {
      setServers((prev) =>
        prev.map((server) => ({
          ...server,
          cpu: Math.floor(Math.random() * 100),
          memory: Math.floor(Math.random() * 100),
          status:
            Math.random() > 0.85
              ? "Critical"
              : Math.random() > 0.70
              ? "Warning"
              : "Healthy",
        }))
      );
    }, 2000);

    return () => clearInterval(timer);
  }, []);

  const getColor = (value) => {
    if (value >= 80) return "#ef4444";
    if (value >= 60) return "#f59e0b";
    return "#22c55e";
  };

  return (
    <div className="infra-page">
      <h2>Infrastructure Inventory</h2>
      <p>Real-time monitoring of enterprise infrastructure.</p>

      <table className="infra-table">
        <thead>
          <tr>
            <th>Hostname</th>
            <th>Environment</th>
            <th>Type</th>
            <th>Status</th>
            <th>CPU</th>
            <th>Memory</th>
          </tr>
        </thead>

        <tbody>
          {servers.map((server) => (
            <tr key={server.id}>
              <td>{server.host}</td>
              <td>{server.env}</td>
              <td>{server.type}</td>

              <td>
                <span className={`status ${server.status.toLowerCase()}`}>
                  {server.status}
                </span>
              </td>

              <td>
                <div className="progress">
                  <div
                    className="fill"
                    style={{
                      width: `${server.cpu}%`,
                      background: getColor(server.cpu),
                    }}
                  ></div>
                </div>
                {server.cpu}%
              </td>

              <td>
                <div className="progress">
                  <div
                    className="fill"
                    style={{
                      width: `${server.memory}%`,
                      background: getColor(server.memory),
                    }}
                  ></div>
                </div>
                {server.memory}%
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}