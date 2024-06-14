const express = require("express");
const bodyParser = require("body-parser");
const dotenv = require("dotenv");
const cors = require("cors");
const participantRoutes = require("./routes/participants");
const errorHandler = require("./middlewares/errorHandler");

// Load environment variables
dotenv.config();

const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(express.static("../frontend"));

// Routes
app.use("/api/participants", participantRoutes);

// Error handling middleware
app.use(errorHandler);

module.exports = app;
