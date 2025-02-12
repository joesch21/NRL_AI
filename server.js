import express from "express";
import cors from "cors";
import fetch from "node-fetch";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

const GOOGLE_SEARCH_API_KEY = process.env.GOOGLE_SEARCH_API_KEY;
const GOOGLE_CSE_ID = process.env.GOOGLE_CSE_ID;

app.get("/api/fixtures", async (req, res) => {
  try {
    console.log("Fetching fixtures from Google...");

    if (!GOOGLE_SEARCH_API_KEY || !GOOGLE_CSE_ID) {
      throw new Error("Missing Google API Key or Search Engine ID. Check your .env file.");
    }

    const searchQuery = "NRL 2025 fixtures site:nrl.com";
    const response = await fetch(
      `https://www.googleapis.com/customsearch/v1?q=${encodeURIComponent(searchQuery)}&cx=${GOOGLE_CSE_ID}&key=${GOOGLE_SEARCH_API_KEY}`
    );

    const textResponse = await response.text(); // Get full response, even if error
    console.log("Response from Google:", textResponse);

    if (!response.ok) {
      throw new Error(`Google API Error: ${textResponse}`);
    }

    const data = JSON.parse(textResponse);
    res.json(data);

  } catch (error) {
    console.error("Error fetching fixtures:", error);
    res.status(500).json({ error: error.message });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
