import React, { useState } from "react";
import axios from "axios";
import WeatherInfo from "./weatherInfo";
import "./weather.css";

export default function Weather(props) {
  const [display, setDisplay] = useState(false);
  const [weatherData, setWeatherData] = useState({});
  const [city, setCity] = useState(props.defaultCity);

  function handleResponse(response) {
    console.log(response.data);
    setWeatherData({
      coordinates: response.data.coord,
      description: response.data.weather[0].description,
      date: new Date(response.data.dt * 1000),
      temp: response.data.main.temp,
      wind: response.data.wind.speed,
      humidity: response.data.main.humidity,
      city: response.data.name,
      icon: response.data.weather[0].icon,
    });
    setDisplay(true);
  }

  function search() {
    const apiKey = "8c48afa47a9a9c24f3500c7039d50aaa";
    let units = "metric";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${units}`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleSearch(event) {
    setCity(event.target.value);
  }

  if (display) {
    return (
      <div className="weather">
        <h2>Weather App</h2>
        <form onSubmit={handleSubmit}>
          <div className="row my-4">
            <div className="col-1"></div>
            <div className="col-8">
              <input
                type="search"
                placeholder="Enter your city"
                autoComplete="off"
                autoFocus="on"
                className="form-control"
                onChange={handleSearch}
              />
            </div>

            <div className="col-3">
              <input
                type="submit"
                value="Search"
                className="btn btn-primary shadow-sn"
              />
            </div>
          </div>
        </form>
        <br />
        <WeatherInfo data={weatherData} />
        <hr />
      </div>
    );
  } else {
    search();
    return "Loading...";
  }
}
