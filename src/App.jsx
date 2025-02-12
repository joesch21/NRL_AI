import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import MatchPage from "./pages/MatchPage";

export default function App() {
  return (
    <Router>
      <div className="overlay"></div>
      <div className="container">
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/match/:id" element={<MatchPage />} />
        </Routes>
      </div>
    </Router>
  );
}

