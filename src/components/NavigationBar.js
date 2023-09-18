import React from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import "../styles/Navigation.css"; // Adăugați fișierul CSS personalizat

const Navigation = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light navigation">
      <div className="container-fluid">
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link to="/" className="nav-link">
              All tasks
            </Link>
          </li>

          <li className="nav-item">
            <Link to="/add" className="nav-link">
              Add a task
            </Link>
          </li>

          <li className="nav-item">
            <Link to="/view" className="nav-link">
              Show a task
            </Link>
          </li>

          <li className="nav-item">
            <Link to="/delete" className="nav-link">
              Delete a task
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navigation;
