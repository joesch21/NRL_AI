import React from "react";
import { Link } from "react-router-dom";
import "../styles.css";

export default function Navbar() {
  return (
    <nav className="navbar">
      <Link to="/">Pre-match Team analysis</Link>
    </nav>
  );
}
