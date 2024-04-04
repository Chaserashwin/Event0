import React from "react";
import Routes from "./Routes";
import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "./pages/Navbar";
import Footer from "./pages/HomePage_Partials/Footer";

function App() {
  return (
    <div className="relative">
      <Router>
        <Navbar className="top-0" />
        <Routes />
        <Footer />
      </Router>
    </div>
  );
}

export default App;
