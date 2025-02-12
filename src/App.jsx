import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import MatchPage from "./pages/MatchPage";
import Footer from "./components/Footer";

export default function App() {
  return (
    <Router>
      {/* Background Overlay */}
      <div className="bg-cover bg-fixed bg-center min-h-screen relative" style={{ backgroundImage: "url('/images/nrlbackground.webp')" }}>
        <div className="overlay"></div>
        
        {/* Main App Container */}
        <div className="container mx-auto p-4 relative z-10">
          <Navbar />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/match/:id" element={<MatchPage />} />
          </Routes>
        </div>

        {/* Footer with Sponsorship */}
        <Footer />
      </div>
    </Router>
  );
}
