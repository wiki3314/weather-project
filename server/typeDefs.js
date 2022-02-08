const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type coord {
    lon: Float
    lat: Float
  }
  input coordInput {
    lon: Float
    lat: Float
  }
  type weatherM {
    main: String
    description: String
    icon: String
  }
  input weatherMInput {
    main: String
    description: String
    icon: String
  }
  type main {
    temp: Float
    feels_like: Float
    temp_min: Float
    temp_max: Float
    pressure: Int
    humidity: Int
    sea_level: Int
    grnd_level: Int
  }
  input mainInput {
    temp: Float
    feels_like: Float
    temp_min: Float
    temp_max: Float
    pressure: Int
    humidity: Int
    sea_level: Int
    grnd_level: Int
  }

  type wind {
    speed: Float
    deg: Int
    gust: Float
  }
  input windInput {
    speed: Float
    deg: Int
    gust: Float
  }

  type clouds {
    all: Int
  }
  input cloudsInput {
    all: Int
  }
  type sys {
    type: Int
    id: Int
    country: String
    sunrise: Int
    sunset: Int
  }
  input sysInput {
    type: Int
    id: Int
    country: String
    sunrise: Int
    sunset: Int
  }
  scalar Date

  type Weather {
    id: ID
    coord: coord
    weather: [weatherM]
    base: String
    main: main
    visibility: Int
    wind: wind
    clouds: clouds
    dt: Int
    sys: sys
    timezone: Int
    name: String
    cod: Int
    createdAt: Date
  }

  input WeatherInput {
    coord: coordInput
    weather: weatherMInput
    base: String
    main: mainInput
    visibility: Int
    wind: windInput
    clouds: cloudsInput
    dt: Int
    sys: sysInput
    timezone: Int
    name: String
    cod: Int
  }
  type User {
    userId: String
  }

  type Query {
    hi: String
    getAllWeather: [Weather]
    getLocationWeather(city: String): Weather
  }
  type Mutation {
    addWeather(weather: WeatherInput): Weather
    createUser: User
  }
`;

module.exports = typeDefs;
