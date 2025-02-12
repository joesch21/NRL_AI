import React, { useState } from "react";
import { Link } from "react-router-dom";
import Card from "./ui/Card";

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

export default function Fixtures() {
  return (
    <div className="p-4 w-full max-w-3xl mx-auto">
      <h1 className="text-2xl sm:text-3xl font-bold mb-4 text-center">NRL 2025 - Weekly Fixtures</h1>
      <p className="text-center text-gray-700">Click on a match to see AI-generated predictions.</p>
      
      <div className="match-list">
        {fixtures.map((fixture) => (
          <Link key={fixture.id} to={`/match/${fixture.id}`} className="match-card">
            <h2 className="text-lg font-semibold">{fixture.awayTeam} vs. {fixture.homeTeam}</h2>
            <p className="text-sm text-gray-600">{fixture.date} - {fixture.time}</p>
            <p className="text-sm text-gray-600">Venue: {fixture.venue}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
