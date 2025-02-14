import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";
import "../styles.css";

const fixtures = [
  { id: "raiders-vs-warriors", date: "March 2, 2025", awayTeam: "Canberra Raiders", homeTeam: "New Zealand Warriors", venue: "Allegiant Stadium, Las Vegas", time: "11:00 AM AEDT" },
  { id: "panthers-vs-sharks", date: "March 2, 2025", awayTeam: "Penrith Panthers", homeTeam: "Cronulla-Sutherland Sharks", venue: "Allegiant Stadium, Las Vegas", time: "3:30 PM AEDT" },
  { id: "roosters-vs-broncos", date: "March 6, 2025", awayTeam: "Sydney Roosters", homeTeam: "Brisbane Broncos", venue: "Allianz Stadium", time: "8:00 PM AEDT" },
  { id: "tigers-vs-knights", date: "March 7, 2025", awayTeam: "Wests Tigers", homeTeam: "Newcastle Knights", venue: "Campbelltown Sports Stadium", time: "6:00 PM AEDT" },
  { id: "dolphins-vs-rabbitohs", date: "March 7, 2025", awayTeam: "Dolphins", homeTeam: "South Sydney Rabbitohs", venue: "Suncorp Stadium", time: "8:05 PM AEDT" },
  { id: "dragons-vs-bulldogs", date: "March 8, 2025", awayTeam: "St. George Illawarra Dragons", homeTeam: "Canterbury-Bankstown Bulldogs", venue: "Netstrata Jubilee Stadium", time: "5:30 PM AEDT" },
  { id: "sea-eagles-vs-cowboys", date: "March 8, 2025", awayTeam: "Manly-Warringah Sea Eagles", homeTeam: "North Queensland Cowboys", venue: "4 Pines Park", time: "7:35 PM AEDT" },
  { id: "eels-vs-storm", date: "March 9, 2025", awayTeam: "Parramatta Eels", homeTeam: "Melbourne Storm", venue: "CommBank Stadium", time: "4:05 PM AEDT" },
];

export default function MatchPage() {
  const { id } = useParams();
  const fixture = fixtures.find((f) => f.id === id);
  const [prediction, setPrediction] = useState(null);
  const [loading, setLoading] = useState(false);

  const getPrediction = () => {
    setLoading(true);
    setTimeout(() => {
      setPrediction("/images/ai.png"); // Show AI-generated tips image
      setLoading(false);
    }, 1000); // Simulate a short delay for better UX
  };

  return (
    <div className="container">
      <div className="match-card">
        <h2>{fixture.awayTeam} vs. {fixture.homeTeam}</h2>
        <p>{fixture.date} | {fixture.time}</p>
        <p>{fixture.venue}</p>
      </div>

      <button className="button" onClick={getPrediction} disabled={loading}>
        {loading ? "AI is thinking hard... Please wait!" : "Get AI Tips"}
      </button>

      {prediction && (
        <div className="match-card">
          <img src={prediction} alt="AI Tips" className="ai-tips-image" />
        </div>
      )}

      <Link to="/" className="button">Back to Home</Link>
      <a 
        href="https://nrl-round-tips.vercel.app/" 
        className="button" 
        target="_blank" 
        rel="noopener noreferrer"
      >
        Tipping Competition
      </a>
    </div>
  );
}
