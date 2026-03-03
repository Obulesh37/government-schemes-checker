import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">
      <h2>🇮🇳 Govt Eligibility Checker</h2>
      <div>
        <Link to="/">Home</Link>
        <Link to="/form">Check Eligibility</Link>
      </div>
    </nav>
  );
}

export default Navbar;