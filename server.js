const express = require("express");
const mongoose = require("mongoose");
const cron = require("node-cron");
const { generateData } = require("./src/controllers/dataGeneratorController");

const app = express();
app.use(express.json());

require("dotenv").config();

console.log("process.env.MONGODB_URI ===>>>>", process.env.MONGODB_URI);

// Connect to MongoDB
mongoose
  .connect(process.env.MONGODB_URI, {})
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("Error connecting to MongoDB:", err));

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));

const task = cron.schedule(
  "*/1 * * * *",
  () => {
    console.log("Running data generation task...");
    //data generation function
    generateData();
  },
  {
    scheduled: true,
  }
);

task.start();
