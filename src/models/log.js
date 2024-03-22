const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const logSchema = new Schema({
  timestamp: { type: Date, required: true },
  event: { type: String, required: true },
  data: {
    location: { type: String },
    temperature: { type: Number },
    humidity: { type: Number },
    air_pressure: { type: Number },
  },
  source: { type: String, required: true },
});

module.exports = mongoose.model("Log", logSchema);
