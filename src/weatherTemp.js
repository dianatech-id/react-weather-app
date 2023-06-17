import React, { useState } from "react";

export default function WeatherTemp(props) {
  const [unit, setUnit] = useState("celsius");

  function convertFarenheit(event) {
    event.preventDefault();
    setUnit("farenheit");
  }

  function convertCelsius(event) {
    event.preventDefault();
    setUnit("celsius");
  }

  function farenheit() {
    return (props.celsius * 9) / 5 + 32;
  }

  if (unit === "celsius") {
    return (
      <div className="weatherTemp">
        <span className="temp">{Math.round(props.celsius)}</span>
        <span className="unit">
          °C |{" "}
          <a href="/" onClick={convertFarenheit}>
            °F
          </a>
        </span>
      </div>
    );
  } else {
    return (
      <div className="weatherTemp">
        <span className="temp">{Math.round(farenheit())}</span>
        <span className="unit">
          {""}{" "}
          <a href="/" onClick={convertCelsius}>
            °C
          </a>{" "}
          {""} | °F
        </span>
      </div>
    );
  }
}
