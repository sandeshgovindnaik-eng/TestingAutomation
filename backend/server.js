const express = require("express");
const path = require("path");
const app = express();

// Serve frontend folder as static files
app.use(express.static(path.join(__dirname, "../frontend")));

// Endpoint to serve Q&A JSON
app.get("/qa", (req, res) => {
    res.sendFile(path.join(__dirname, "QA.json"));
});

// Serve index.html for root
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "../frontend/index.html"));
});

// Start server
app.listen(3000, () => console.log("Server running at http://localhost:3000"));
