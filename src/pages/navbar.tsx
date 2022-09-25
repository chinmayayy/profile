import { Link } from "react-router-dom";
import React from 'react';
import './navbar.css';

const navbar: React.FC = () => {
    return(
      <div>
        <nav id = "navbar">
          <Link className="navbar-item" to="/">About Me </Link>
          <Link className="navbar-item" to="/achievements">Achievements</Link> 
          <Link className="navbar-item" to="/communities">Communities</Link> 
          <Link className="navbar-item" to="/projects">Projects</Link> 
          <Link className="navbar-item" to="/publications">My Publications</Link> 
        </nav>
      </div>
    )
  }
    
  export default navbar;