import React from 'react';
import { Outlet, Link } from "react-router-dom";
import '../App.css'
const navbar = () => {
  return (
    <div className="nav">
      <ul>
        <li>
            <Link to="/"> Home </Link>
        </li>
        <li>
            <Link to="/about"> About </Link>
        </li>
        <li>
            <Link to="/weather">Contact Us</Link>
        </li>
      </ul>
    </div>
  );
}

export default navbar;
