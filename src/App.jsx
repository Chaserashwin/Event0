import React from "react";
import Routes from "./Routes";
import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "./pages/Navbar";

function App() {
  return (
    <div>
      <Navbar />
      <Router>
        <Routes />
      </Router>
    </div>
  );
}

export default App;
