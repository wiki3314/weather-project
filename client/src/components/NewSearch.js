import React, { useState } from "react";
import WeatherComponent from "./WeatherComponent";
import "./search.css";

export default function Search({ searchCity }) {
  const [currentCity, setCurrentCity] = useState("");
  const [search, setSearch] = useState(false);

  function handleInputChange(event) {
    let value = event.target.value;
    if (value == "") {
      return;
    }
    setCurrentCity(value);
    setTimeout(() => {
      setSearch(true);
    }, 3000);
  }

  function handleButtonClick() {
    if (currentCity.trim() === "") return;
  }

  console.log("city", currentCity);

  return (
    <div>
      <div className="Search">
        <label className="Search__label">
          <input
            className="Search__input"
            value={currentCity}
            onChange={handleInputChange}
          />
        </label>
      </div>
      {search ? <WeatherComponent query={currentCity} /> : <></>}
    </div>
  );
}
