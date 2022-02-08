const axios = require("axios");
const Weather = require("./model/Weather");
// const city = "Abbottabad";
// const appId = "ec3210a8d450bad3af0984990458328d";
const weatherUrl = `https://api.openweathermap.org/data/2.5/weather`;

const getWeather = async (city, appId) => {
  try {
    const response = await axios.get(`${weatherUrl}?q=${city}&appid=${appId}`);
    return response;
  } catch (error) {
    console.log(error);
  }
};
const getWeatherAndUpdateDb = async (city, appId) => {
  try {
    const response = await axios.get(`${weatherUrl}?q=${city}&appid=${appId}`);
    const {
      coord,
      weather,
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
    } = response.data;
    const checkUpdates = await Weather.findOne({ main });
    // console.log("checkUpdates ", checkUpdates);
    if (!checkUpdates) {
      console.log("Updates needed");
      const updateDb = await Weather.create({
        coord,
        weather,
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
      return updateDb;
    } else {
      return "No updates availables";
    }
  } catch (error) {
    console.log(error);
  }
};
module.exports = { getWeather, getWeatherAndUpdateDb };

// const response = await axios.get(
//     `${weatherUrl}/groups/update?${typeParams}`,
//     chatData,
//     {
//       headers: {
//         Authorization: `Bearer ${token}`,
//       },
//     }
//   );
