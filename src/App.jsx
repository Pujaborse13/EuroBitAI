import { useState } from "react";

import Sidebar from "./components/Sidebar/Sidebar";
import Navbar from "./components/Navbar/Navbar";

import Dashboard from "./pages/Dashboard/Dashboard";
import PowerOf10 from "./pages/PowerOf10/PowerOf10";

import "./App.css";

function App() {

  const [currentPage, setCurrentPage] = useState("dashboard");

  return (
    <div className="app">

      <Sidebar setCurrentPage={setCurrentPage} />

      <div className="main">

        <Navbar />

        <div className="page-content">

          {currentPage === "dashboard" && <Dashboard />}

          {currentPage === "power10" && <PowerOf10 />}

        </div>

      </div>

    </div>
  );
}

export default App;