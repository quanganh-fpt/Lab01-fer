import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "./useAuth";

export default function Navbar() {
  const { user, login, logout } = useAuth();

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        {/* Brand */}
        <Link className="navbar-brand" to="/">
          Orchid Collection
        </Link>

       

        {/* Menu items */}
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/naturals">
                Naturals
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/contact">
                Contact
              </Link>
            </li>
          </ul>

          {/* User login/logout */}
          <div className="d-flex">
            {user ? (
              <>
                <span className="navbar-text text-white me-3">
                  Hello, {user.name}
                </span>
                <button className="btn btn-outline-light" onClick={logout}>
                  Logout
                </button>
              </>
            ) : (
              <button
                className="btn btn-outline-light"
                onClick={() => login("quang anh")}
              >
                Login
              </button>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}
