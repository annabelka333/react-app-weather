import React from "react";
import "./Weather.css";

export default function Weather() {
  return (
    <div className="Weather">
      <form>
        <div className="row">
          <div className="col-9">
            <input
              type="Search"
              placeholder="Type a city... "
              className="form-control"
            ></input>
          </div>

          <div className="col-3">
            <input
              type="search"
              value="Search"
              className="btn btn-primary"
            ></input>
          </div>
        </div>
      </form>
      <h1>Kyiv</h1>
      <ul>
        <li> Wednesday 21:00</li>
        <li>Clear</li>
      </ul>
      <div className="row">
        <div className="col-6">
          <img
            src="https://ssl.gstatic.com/onebox/weather/64/snow_s_rain.png
            "
            alt="Rain and Snow"
          />{" "}
          0°C
        </div>
        <div className="col-6">
          <ul>
            <li>Precipitation:0%</li>
            <li>Humidity:71%</li>
            <li>Wind:3 km/h</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
