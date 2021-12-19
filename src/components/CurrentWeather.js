import React from 'react';
import mostlyCloudy from "../img/weather-icons/mostlycloudy.svg";

import "./CurrentWeather.css";

class CurrentWeather extends React.Component {
    render() { 
        return(
            <div className="current__wrapper">
            <div className="current__styler">
              <img className="current__image" src={mostlyCloudy} alt="storm icon" />
              <div className="current__grid">
                <div className="current__description">overcast clouds</div>
                <div className="current__temprature">
                  <span className="temprature__title">Temperature</span>
                  <span className="temprature__value"> 10&#176; to 11&#176;C</span>
                </div>
                <div className="current__humidity">
                  <span className="humidity__title">Humidity</span>
                  <span className="humidity__value">78%</span>
                </div>
                <div className="current__pressure">
                  <span className="pressure__title">Pressure</span>
                  <span className="pressure__value">1008.48</span>
                </div>
              </div>

            </div>
          </div>
        );
    }
}
 
export default CurrentWeather;