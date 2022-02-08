const { findByIdAndUpdate } = require("./model/Post");
const Weather = require("./model/Weather");
const axios = require("axios");
const { v1 } = require("uuid");
const User = require("./model/User");
const appId = "ec3210a8d450bad3af0984990458328d";
const weatherUrl = `https://api.openweathermap.org/data/2.5/weather`;

const resolvers = {
  Query: {
    hi: () => {
      return "hi world";
    },
    getAllWeather: async () => {
      return await Weather.find();
    },
    getLocationWeather: async (parent, args, context, info) => {
      // if (!context.user) return null;
      const { city } = args;
      const response = await axios.get(
        `${weatherUrl}?q=${city}&appid=${appId}`
      );
      return response.data;
    },
  },
  Mutation: {
    addWeather: async (parent, args, context, info) => {
      const {
        coord,
        base,
        main,
        visibility,
        wind,
        clouds,
        dt,
        sys,
        timezone,
        name,
        cod,
      } = args.weather;
      const weather = new Weather({
        coord,
        weather: args.weather.weather,
        base,
        main,
        visibility,
        wind,
        clouds,
        dt,
        sys,
        timezone,
        name,
        cod,
      });
      await weather.save();
      return weather;
    },
    createUser: async (parent, args, context, info) => {
      const userId = v1();
      const user = await User.create({ userId });
      return user;
    },
  },
};

module.exports = resolvers;
