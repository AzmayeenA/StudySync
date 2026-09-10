const express = require("express");

const app = express();
const PORT = 3000;

// Middleware
app.use(express.json());

// Home route
app.get("/", (req, res) => {
    res.send("Welcome to StudySync!");
});

// Start server
app.listen(PORT, () => {
    console.log(`StudySync server is running at http://localhost:${PORT}`);
});