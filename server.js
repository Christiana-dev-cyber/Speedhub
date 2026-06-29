require("dotenv").config();

const express = require("express");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3000;

// View engine
app.set("view engine", "ejs");

// Views folder
app.set("views", path.join(__dirname, "views"));

// Static files
app.use(express.static(path.join(__dirname, "public")));

// Home page
app.get("/", (req, res) => {
    res.render("pages/index");
});

// Start server
app.listen(PORT, () => {
    console.log(`🚀 QUICKNET is running at http://localhost:${PORT}`);
});