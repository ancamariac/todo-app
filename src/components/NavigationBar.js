import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';


const Navigation = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link to="/" className="nav-link">
            Lista de Task-uri
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/add" className="nav-link">
            Adaugă Task
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/view" className="nav-link">
            Afișează Task
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/delete" className="nav-link">
            Șterge Task
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
