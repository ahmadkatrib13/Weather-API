import React from 'react';

import "./CurrentWeather.css";

class CurrentWeather extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      image:"",
      description:"",
      minTemp: "",
      maxTemp:"",
      humidity:"",
      pressure:""
    };
  }
  FehrenheiToCelsius =(f)=>{return Math.round(f-273.15)};

    render() { 
        return(
            <div className="current__wrapper">
            <div className="current__styler">
              <img className="current__image" src={this.props.image} alt="storm icon" />
              <div className="current__grid">
                <div className="current__description">overcast clouds</div>
                <div className="current__temprature">
                  <span className="temprature__title">Temperature</span>
                  <span className="temprature__value"> {this.FehrenheiToCelsius(this.props.currentElement.main.temp_min)}&#176; to  {this.FehrenheiToCelsius(this.props.currentElement.main.temp_max)}&#176;C</span>
                </div>
                <div className="current__humidity">
                  <span className="humidity__title">Humidity</span>
                  <span className="humidity__value">{this.props.currentElement.main.humidity}%</span>
                </div>
                <div className="current__pressure">
                  <span className="pressure__title">Pressure</span>
                  <span className="pressure__value">{this.props.currentElement.main.pressure}</span>
                </div>
              </div>

            </div>
          </div>
        );
    }
}
 
export default CurrentWeather;