const  {saveWeatherData}  = require("../services/dataGEneratorService");

async function generateData() {
  try {
    await saveWeatherData();
    console.log("Weather data generated successfully");
  } catch (error) {
    console.log("error ===>>>", error);
  }
}

module.exports = { generateData };
