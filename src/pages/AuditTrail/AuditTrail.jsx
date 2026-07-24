import React, { useMemo, useState } from "react";
import "./AuditTrail.css";
import auditData from "./auditData";

import SearchIcon from "@mui/icons-material/Search";
import RefreshIcon from "@mui/icons-material/Refresh";
import DownloadIcon from "@mui/icons-material/Download";
import SecurityIcon from "@mui/icons-material/Security";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import ErrorIcon from "@mui/icons-material/Error";
import WarningAmberIcon from "@mui/icons-material/WarningAmber";
import PersonIcon from "@mui/icons-material/Person";

const AuditTrail = () => {
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("All");

  const filteredData = useMemo(() => {
    return auditData.filter((item) => {
      const matchesSearch =
        item.user.toLowerCase().includes(search.toLowerCase()) ||
        item.action.toLowerCase().includes(search.toLowerCase()) ||
        item.module.toLowerCase().includes(search.toLowerCase()) ||
        item.id.toLowerCase().includes(search.toLowerCase());

      const matchesStatus =
        statusFilter === "All" || item.status === statusFilter;

      return matchesSearch && matchesStatus;
    });
  }, [search, statusFilter]);

  const stats = useMemo(() => {
    return {
      total: auditData.length,
      success: auditData.filter((i) => i.status === "Success").length,
      failed: auditData.filter((i) => i.status === "Failed").length,
      critical: auditData.filter((i) => i.severity === "Critical").length,
      users: [...new Set(auditData.map((i) => i.user))].length,
    };
  }, []);

  return (
    <div className="audit-page">

      {/* ================= HEADER ================= */}

      <div className="audit-header">

        <div>
          <h2>Audit Trail</h2>
          <p>
            Monitor user activities, scheduler logs, security events and
            system operations.
          </p>
        </div>

        <div className="header-buttons">

          <button className="refresh-btn">
            <RefreshIcon />
            Refresh
          </button>

          <button className="export-btn">
            <DownloadIcon />
            Export
          </button>

        </div>

      </div>

      {/* ================= STATISTICS ================= */}

      <div className="stats-grid">

        <div className="stat-card">
          <SecurityIcon className="card-icon blue" />
          <h3>{stats.total}</h3>
          <span>Total Events</span>
        </div>

        <div className="stat-card">
          <CheckCircleIcon className="card-icon green" />
          <h3>{stats.success}</h3>
          <span>Successful</span>
        </div>

        <div className="stat-card">
          <ErrorIcon className="card-icon red" />
          <h3>{stats.failed}</h3>
          <span>Failed</span>
        </div>

        <div className="stat-card">
          <WarningAmberIcon className="card-icon orange" />
          <h3>{stats.critical}</h3>
          <span>Critical Alerts</span>
        </div>

        <div className="stat-card">
          <PersonIcon className="card-icon purple" />
          <h3>{stats.users}</h3>
          <span>Unique Users</span>
        </div>

      </div>

      {/* ================= SEARCH + FILTER ================= */}

      <div className="toolbar">

        <div className="search-box">

          <SearchIcon />

          <input
            type="text"
            placeholder="Search user, action, module or event id..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />

        </div>

        <select
          value={statusFilter}
          onChange={(e) => setStatusFilter(e.target.value)}
        >
          <option>All</option>
          <option>Success</option>
          <option>Failed</option>
        </select>

      </div>

      {/* ================= TABLE ================= */}

      <div className="table-container">

        <table>

          <thead>

            <tr>
              <th>Event ID</th>
              <th>Time</th>
              <th>User</th>
              <th>Role</th>
              <th>Action</th>
              <th>Module</th>
              <th>Status</th>
              <th>IP Address</th>
            </tr>

          </thead>

          <tbody>

            {filteredData.map((row) => (

              <tr key={row.id}>

                <td>{row.id}</td>

                <td>
                  {row.date}
                  <br />
                  {row.time}
                </td>

                <td>{row.user}</td>

                <td>{row.role}</td>

                <td>{row.action}</td>

                <td>{row.module}</td>

                <td>
                  <span
                    className={
                      row.status === "Success"
                        ? "status success"
                        : "status failed"
                    }
                  >
                    {row.status}
                  </span>
                </td>

                <td>{row.ip}</td>

              </tr>

            ))}

          </tbody>

        </table>

      </div>

    </div>
  );
};

export default AuditTrail;