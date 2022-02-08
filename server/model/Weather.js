const mongoose = require("mongoose");

const weatherSchema = new mongoose.Schema({
  coord: { lon: { type: Number }, lat: { type: Number } },
  weather: [
    {
      // id: { Number },
      main: { type: String },
      description: { type: String },
      icon: { type: String },
    },
  ],

  base: { type: String },
  main: {
    temp: { type: Number },
    feels_like: { type: Number },
    temp_min: { type: Number },
    temp_max: { type: Number },
    pressure: { type: Number },
    humidity: { type: Number },
    sea_level: { type: Number },
    grnd_level: { type: Number },
  },
  visibility: { type: Number },
  wind: {
    speed: { type: Number },
    deg: { type: Number },
    gust: { type: Number },
  },
  clouds: {
    all: { type: Number },
  },
  dt: { type: Number },
  sys: {
    type: { type: Number },
    id: { type: Number },
    country: { type: String },
    sunrise: { type: Number },
    sunset: { type: Number },
  },
  timezone: { type: Number },
  //   id: { type: Number },
  name: { type: String },
  cod: { type: Number },
  createdAt: { type: Date, default: Date.now },
});

const Weather = mongoose.model("weather", weatherSchema);

module.exports = Weather;
