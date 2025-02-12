import React, { useState, useEffect } from "react";
import Card from "./ui/card";


export default function Fixtures() {
  const [fixtures, setFixtures] = useState([
    {
      date: "March 2, 2025",
      awayTeam: "Canberra Raiders",
      homeTeam: "New Zealand Warriors",
      venue: "Allegiant Stadium, Las Vegas",
      time: "11:00 AM AEDT"
    },
    {
      date: "March 2, 2025",
      awayTeam: "Penrith Panthers",
      homeTeam: "Cronulla-Sutherland Sharks",
      venue: "Allegiant Stadium, Las Vegas",
      time: "3:30 PM AEDT"
    },
    {
      date: "March 7, 2025",
      awayTeam: "Parramatta Eels",
      homeTeam: "Canterbury Bulldogs",
      venue: "CommBank Stadium",
      time: "8:00 PM AEDT"
    },
    {
      date: "March 8, 2025",
      awayTeam: "Gold Coast Titans",
      homeTeam: "St. George Illawarra Dragons",
      venue: "Cbus Super Stadium",
      time: "5:30 PM AEDT"
    }
  ]);

  const [predictions, setPredictions] = useState({});
  const [loadingPrediction, setLoadingPrediction] = useState(null);

  const getPrediction = async (fixture) => {
    const matchKey = `${fixture.awayTeam} vs ${fixture.homeTeam} - ${fixture.date}`;
    setLoadingPrediction(matchKey);
  
    try {
      const response = await fetch("https://api.openai.com/v1/chat/completions", {
        method: "POST",
        headers: {
          "Authorization": `Bearer ${import.meta.env.VITE_OPENAI_API_KEY}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          model: "gpt-4",
          messages: [
            {
              role: "system",
              content: "You are an advanced NRL sports analyst. Provide a unique match prediction considering the teams' past performance, key players, and venue conditions. Ensure responses are distinct for each match."
            },
            {
              role: "user",
              content: `Analyze the matchup between **${fixture.awayTeam}** and **${fixture.homeTeam}** at **${fixture.venue}** on **${fixture.date}**. 
                        Include last season's performance, star players, potential key moments, and a predicted outcome. 
                        Ensure the analysis is unique and considers venue differences. Format team names, players, and scores in bold.`
            }
          ],
          temperature: 0.8, // Slightly higher temperature for variation
        }),
      });
  
      if (!response.ok) throw new Error("Failed to fetch prediction");
  
      const data = await response.json();
      const prediction = data.choices[0].message.content;
  
      setPredictions((prev) => ({ ...prev, [matchKey]: prediction }));
    } catch (error) {
      console.error("Error fetching prediction:", error);
    } finally {
      setLoadingPrediction(null);
    }
  };
  
  return (
    <div className="p-4 w-full max-w-md mx-auto sm:max-w-lg md:max-w-xl lg:max-w-2xl">
      <h1 className="text-2xl sm:text-3xl font-bold mb-4 text-center">NRL 2025 - Weekly Fixtures</h1>
      {fixtures.length > 0 ? (
        fixtures.map((fixture, index) => {
          const matchKey = `${fixture.awayTeam} vs ${fixture.homeTeam} - ${fixture.date}`;
          return (
            <div key={index} className="mb-6">
              <h2 className="text-lg sm:text-xl font-semibold mb-2 text-center">{fixture.date}</h2>
              <Card teams={`${fixture.awayTeam} vs. ${fixture.homeTeam}`} venue={fixture.venue} time={fixture.time} />
              <button
                className="mt-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700"
                onClick={() => getPrediction(fixture)}
                disabled={loadingPrediction === matchKey}
              >
                {loadingPrediction === matchKey ? "AI is thinking hard... Please wait!" : "Get Prediction"}
              </button>
              {predictions[matchKey] && (
                <p className="mt-2 text-center text-sm text-gray-700" dangerouslySetInnerHTML={{ __html: predictions[matchKey] }}></p>
              )}
            </div>
          );
        })
      ) : (
        <p className="text-center text-sm sm:text-base">Loading fixtures...</p>
      )}
    </div>
  );
}