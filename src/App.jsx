import { useState } from "react";
import Sidebar from "./components/Sidebar/Sidebar";
import Navbar from "./components/Navbar/Navbar";
import Dashboard from "./pages/Dashboard/Dashboard";
import PowerOf10 from "./pages/PowerOf10/PowerOf10";
import Login from "./pages/Login/Login";
import Notification from "./pages/Notifications/Notification";
import Users from "./pages/Users/Users";
import KnowledgeSearch from "./pages/KnowledgeSearch/KnowledgeSearch";
import Infrastructure from "./pages/Infrastructure/Infrastructure";
import Settings from "./pages/Settings/Settings";
import RolePermission from "./pages/RolePermission/RolePermission";
import AuditTrail from "./pages/AuditTrail/AuditTrail";
import Connector from "./pages/Connector/Connector";
import Monitoring from "./pages/Monitoring/Monitoring";




import "./App.css";

function App() {

  const [loggedIn, setLoggedIn] = useState(false);
  const [currentPage, setCurrentPage] = useState("dashboard");
  const [showLogin, setShowLogin] = useState(false);


  // Open Login Page
  const openLogin = () => {
    setShowLogin(true);
  };


  // Login Success
  const handleLogin = () => {
    setLoggedIn(true);
    setShowLogin(false);
  };


  // Show Login Page
  if (!loggedIn || showLogin) {
    return (
      <Login 
        setLoggedIn={handleLogin}
      />
    );
  }


  return (

    <div className="app">

      <Sidebar 
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />


      <div className="main">

      <Navbar
        onUserClick={openLogin}
        setCurrentPage={setCurrentPage}
      />

        <div className="page-content">

        {currentPage === "dashboard" && <Dashboard />}

        {currentPage === "power10" && <PowerOf10 />}

        {currentPage === "notification" && <Notification />}

        {currentPage === "users" && <Users />}

      {currentPage === "KnowledgeSearch" && <KnowledgeSearch />}
      {currentPage === "Infrastructure" && <Infrastructure />}
       {currentPage === "Settings" && <Settings />}
       {currentPage === "RolePermission" && <RolePermission />}
       {currentPage === "AuditTrail" && <AuditTrail />}
          {currentPage === "Connector" && <Connector />}
          {currentPage === "Monitoring" && <Monitoring />}
       

      </div>



      </div>

    </div>

  );

}

export default App;