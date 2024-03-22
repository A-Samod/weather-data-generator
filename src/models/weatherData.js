const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const weatherSchema = new Schema({
  updatedAt: { type: Date },
  location: { type: String },
  weather: {
    temperature: { type: Number },
    humidity: { type: Number },
    air_pressure: { type: Number },
  },
});

module.exports = mongoose.model("WeatherData", weatherSchema);
