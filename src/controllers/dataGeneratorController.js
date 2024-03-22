const { saveWeatherData } = require("../services/dataGeneratorService");

async function generateData() {
  try {
    await saveWeatherData();
    console.log("Weather data generated successfully");
  } catch (error) {
    console.log("error ===>>>", error);
  }
}

module.exports = { generateData };
