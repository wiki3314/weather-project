import React from "react";
import { useQuery } from "@apollo/client";
import Constants from "../constants/constants";
import Weather from "./Weather";
const WeatherComponent = ({ query }) => {
  const { data, error, loading } = useQuery(Constants.NEW_CITY_WEATHER, {
    variables: { city: query },
  });

  if (error) {
    console.log("error==", error);
  }

  return (
    <>
      {loading ? (
        <div style={{ margin: 20, padding: 20 }}>
          <h1>Loading</h1>
        </div>
      ) : error ? (
        <>
          {/* <div>No data availabe.......</div> */}
          <div style={{ margin: 20, padding: 20 }}>
            <h1>No data availabe</h1>
          </div>
        </>
      ) : (
        <Weather weatherData={data.getLocationWeather} />
      )}
    </>
  );
};

export default WeatherComponent;
