const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const weatherSchema = new Schema({
  id:{ type:Number },
  lat:{ type : Number},
  lng:{ type : Number },
  district: { type: String },
  temperature: { type: Number },
  humidity: { type: Number },
  air_pressure: { type: Number },
  updatedAt: { type: Date },
});

module.exports = mongoose.model("WeatherData", weatherSchema);
