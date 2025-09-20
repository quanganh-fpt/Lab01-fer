import React, { useState } from "react";
import "./App.css";
import Navigation from "./components/Navigation";
import Main from "./components/Main";
import Footer from "./components/Footer";
import Orchids from "./components/Orchids";

function App() {
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  const toggleTheme = () => {
    setIsDarkTheme(!isDarkTheme);
  };

  return (
    <div
      className={`d-flex flex-column min-vh-100 ${
        isDarkTheme ? "bg-dark text-light" : "bg-light text-dark"
      }`}
    >
      <Navigation isDarkTheme={isDarkTheme} onToggleTheme={toggleTheme} />
      <div >
        <Main />
      </div>
      <Footer />
    </div>
  );
}

export default App;
