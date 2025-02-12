import React from "react";
import { Link } from "react-router-dom";
import "../styles.css";

export default function Navbar() {
  return (
    <nav className="navbar">
      <Link to="/">NRL AI Game Predictor</Link>
    </nav>
  );
}
