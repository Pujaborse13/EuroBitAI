import Sidebar from "./components/Sidebar/Sidebar";
import Navbar from "./components/Navbar/Navbar";
import Dashboard from "./pages/Dashboard/Dashboard";
import "./App.css";

function App() {
  return (
    <div className="app">
      <Sidebar />

      <div className="main">
        <Navbar />
        <Dashboard />
      </div>
    </div>
  );
}

export default App;