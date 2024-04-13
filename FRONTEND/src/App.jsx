import React from "react";
import { useState, useEffect } from "react";
import Routes from "./Routes";
import { BrowserRouter as Router } from "react-router-dom";
import Footer from "./pages/HomePage_Partials/Footer";
import Header from "./pages/Header";
import axios from "axios";
import { Toaster } from "react-hot-toast";

axios.defaults.baseURL = "https://event0-backend.vercel.app/";
axios.defaults.withCredentials = true;

function App() {
  // const [darkMode, setDarkMode] = useState(false);
  // const [theme, setTheme] = useState("light");
  const [theme, setTheme] = useState(null);

  // for browser windows mode default
  useEffect(() => {
    if (window.matchMedia("(prefers-color-scheme:dark)").matches) {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  }, []);

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  // const toggleDarkMode = () => {
  //   setDarkMode(!darkMode);
  // };

  const handleThemeSwitch = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    // <div className={`"relative" ${darkMode && "dark"} `}>
    <div className={`${theme === "dark" && "dark"} dark:bg-slate-950`}>
      <Toaster position="top-center" toastOptions={{ duration: 2000 }} />
      <Router>
        <Header />
        <Routes />
        <button
          className="fixed w-16 h-16 bottom-16 right-16 bg-neutral-900 dark:bg-white rounded-full text-white dark:text-black font-semibold "
          onClick={handleThemeSwitch}
        >
          {theme === "dark" ? "LHT" : "DRK"}
        </button>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
