import { useState } from "react";


import Sidebar from "./components/Sidebar/Sidebar";
import Navbar from "./components/Navbar/Navbar";
import Dashboard from "./pages/Dashboard/Dashboard";
import PowerOf10 from "./pages/PowerOf10/PowerOf10";
import Login from "./pages/Login/Login";

import "./App.css";

function App() {

  const [loggedIn, setLoggedIn] = useState(false);

  const [currentPage, setCurrentPage] = useState("dashboard");

  // NEW STATE
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
        setCurrentPage={setCurrentPage}
      />


      <div className="main">

        <Navbar 
          onUserClick={openLogin}
        />


        {currentPage === "dashboard" && 
          <Dashboard/>
        }


        {currentPage === "power10" && 
          <PowerOf10/>
        }


      </div>

    </div>

  );

}

export default App;