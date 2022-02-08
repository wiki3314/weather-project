import { gql } from "@apollo/client";
const Constants = {};
Constants.GET_ALL_WEATHER = gql`
  query getAllWeather {
    getAllWeather {
      id
      coord {
        lat
        lon
      }
      base
      main {
        temp
        feels_like
        temp_min
        temp_max
        pressure
        humidity
        sea_level
        grnd_level
      }
      visibility
      wind {
        speed
        deg
        gust
      }
      clouds {
        all
      }
      dt
      sys {
        type
        id
        country
        sunrise
        sunset
      }
      timezone
      name
      cod
    }
  }
`;

Constants.NEW_CITY_WEATHER = gql`
  query getLocationWeather($city: String) {
    getLocationWeather(city: $city) {
      id
      coord {
        lat
        lon
      }
      weather {
        description
      }
      base
      main {
        temp
        feels_like
        temp_min
        temp_max
        pressure
        humidity
        sea_level
        grnd_level
      }
      visibility
      wind {
        speed
        deg
        gust
      }
      clouds {
        all
      }
      dt
      sys {
        type
        id
        country
        sunrise
        sunset
      }
      timezone
      name
      cod
    }
  }
`;

// Constants.CREATE_API_KEY = gql`
//   mutation createUser{
//     createUser {
//       userId
//     }
//   }
// `;

export default Constants;
