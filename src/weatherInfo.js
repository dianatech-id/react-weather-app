import React from "react";
import WeatherTemp from "./weatherTemp";
import FormatDate from "./FormatDate";
import "./weatherInfo.css";

export default function WeatherInfo(props) {
  return (
    <div className="weatherInfo">
      <div className="row text-center">
        <div className="col-4">
          <h1 className="namecity">{props.data.city}</h1>
        </div>

        <div className="col-5">
          <h1>
            <WeatherTemp celsius={props.data.temp} />
          </h1>
          <div className="float-left">
            <img
              id="image"
              src={`http://openweathermap.org/img/wn/${props.data.icon}@2x.png`}
              alt=""
              width="70"
            />
          </div>
        </div>

        <div className="col-3">
          <ul className="info">
            <li className="description">
              <strong>{props.data.description}</strong>
            </li>
            <li className="date">
              <strong>
                <FormatDate date={props.data.date} />
              </strong>
            </li>
            <li className="humidity">
              <strong>
                Humidity {""} {Math.round(props.data.humidity)}%
              </strong>
            </li>
            <li className="wind">
              <strong>
                Wind {""} {Math.round(props.data.wind)}km/h
              </strong>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
