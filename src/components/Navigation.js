import React from "react";

export default function Navigation({ isDarkTheme, onToggleTheme }) {
  return (
    <div>
      <nav
        className={`navbar navbar-expand-lg ${
          isDarkTheme ? "navbar-dark bg-dark" : "navbar-light bg-light"
        }`}
      >
        <a className="navbar-brand" href="#">
          Orchid Collection
        </a>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav me-auto">
            <li className="nav-item active">
              <a className="nav-link" href="#">
                Home <span className="sr-only">(current)</span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#products">
                Products
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#about">
                About
              </a>
            </li>
          </ul>
          <div className="navbar-nav">
            <button
              className={`btn ${
                isDarkTheme ? "btn-outline-light" : "btn-outline-dark"
              } btn-sm`}
              onClick={onToggleTheme}
            >
              {isDarkTheme ? "☀️ Light" : "🌙 Dark"}
            </button>
          </div>
        </div>
      </nav>
    </div>
  );
}
