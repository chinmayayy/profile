import { Link } from "react-router-dom";
import React from 'react';
import ReactDOM from 'react-dom';
import './navbar.css';

const navbar: React.FC = () => {
    return(
      <div>
        <nav id = "navbar">
          <Link className="navbar-item" to="/">Home</Link> 
          <Link className="navbar-item" to="/resume">Resume</Link> 
          <Link className="navbar-item" to="/about">About</Link> 
        </nav>
      </div>
    )
  }
    
  export default navbar;