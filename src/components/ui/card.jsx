import React from "react";

export default function Card({ teams, venue, time }) {
  return (
    <div className="mb-3 p-4 shadow-lg border rounded-lg bg-white w-full sm:w-96 mx-auto">
      <h3 className="text-lg font-medium text-center">{teams}</h3>
      <p className="text-sm text-gray-600 text-center">Venue: {venue}</p>
      <p className="text-sm text-gray-600 text-center">Time: {time}</p>
    </div>
  );
}
