const express = require("express");
const axios = require("axios");
const cors = require("cors");
const app = express();
const PORT = 5000; // You can change the port if needed
app.use(cors());
app.get("/", (req, res) => {
  res.send("Hello from Node.js on Vercel!");
});

app.get("/news", async (req, res) => {
  console.log(req.query);
  try {
    // Fetch news data from News API
    const response = await axios.get("https://newsapi.org/v2/top-headlines", {
      params: {
        country: "us",
        category: req.query.category,
        apiKey: req.query.apiKey,
      },
    });
    res.json(response.data); // Send the news data back to the frontend
  } catch (error) {
    res.status(500).send("Error fetching news");
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
