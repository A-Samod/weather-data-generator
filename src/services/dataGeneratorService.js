const mongoose = require("mongoose");
const Log = require("../models/log");
const WeatherData = require("../models/weatherData");

const districts = [
  "Ampara",
  "Anuradhapura",
  "Badulla",
  "Batticaloa",
  "Colombo",
  "Galle",
  "Gampaha",
  "Hambantota",
  "Jaffna",
  "Kalutara",
  "Kandy",
  "Kegalle",
  "Kilinochchi",
  "Kurunegala",
  "Mannar",
  "Matale",
  "Matara",
  "Monaragala",
  "Mullaitivu",
  "Nuwara Eliya",
  "Polonnaruwa",
  "Puttalam",
  "Ratnapura",
  "Trincomalee",
  "Vavuniya",
];

const utcTime = new Date(); // Get current UTC time

// Calculate time difference in milliseconds (SLST is UTC+05:30)
const timeDifference = 5.5 * 60 * 60 * 1000;

// Convert to Sri Lankan time
const sriLankanTime = new Date(utcTime.getTime() + timeDifference);

console.log("sriLankanTime ---------->", sriLankanTime);

function generateRandomWeatherData(location) {
  return {
    temperature: Math.floor(Math.random() * (35 - 25) + 25),
    humidity: Math.floor(Math.random() * (85 - 65) + 65),
    air_pressure: Math.floor(Math.random() * (1020 - 1000) + 1000),
  };
}

async function saveWeatherData() {
  for (const district of districts) {
    const weatherData = generateRandomWeatherData(district);

    console.log("weatherData ---------->", weatherData);

    // Update or create WeatherData record
    const updateResult = await WeatherData.findOneAndUpdate(
      { location: district },
      { weather: weatherData, updatedAt: sriLankanTime },
      { upsert: true, new: true }
    );

    console.log("updateResult ---------->", updateResult);

    const savedWeatherData = updateResult ? updateResult : weatherData;

    console.log("savedWeatherData ---------->", savedWeatherData);

    const weatherLogData = {
      location: district,
      ...savedWeatherData.weather,
    };

    // Create a separate log entry for each district
    const weatherLog = new Log({
      timestamp: sriLankanTime,
      event: `Weather data updated for ${district}`,
      data: weatherLogData,
      source: "Data Generation Service",
    });
    await weatherLog.save();
  }
}

module.exports = { saveWeatherData };
