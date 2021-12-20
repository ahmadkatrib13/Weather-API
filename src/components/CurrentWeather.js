import React from 'react';

import "./CurrentWeather.css";

class CurrentWeather extends React.Component {
  getIcon = (id)=>{
    if( id < 300 ) return "storm";
    else if (id >= 300 && id <= 499) return "drizzle";
    else if (id >= 500 && id <= 599) return "rain";
    else if(id >= 600 && id <= 699) return "snow";  
    else if (id >= 700 && id <= 799) return "fog";
    else if (id === 800) return "clear";
    else if (id === 801) return "partlycloudy";
    else if (id > 801 && id <= 805) return "mostlycloudy";
            }

    render() { 
        return(
            <div className="current__wrapper">
            <div className="current__styler">
              <img className="current__image" src={require(`../img/weather-icons/${this.getIcon(this.props.currentElement.weather[0].id)}.svg`)} alt={this.props.currentElement.weather.main} placeholder={this.props.currentElement.weather[0].main}/>
              <div className="current__grid">
                <div className="current__description">{this.props.currentElement.weather[0].description}</div>
                <div className="current__temprature">
                  <span className="temprature__title">Temperature</span>
                  <span className="temprature__value"> {this.props.currentElement.main.temp_min}&#176; to  {this.props.currentElement.main.temp_max}&#176;C</span>
                </div>
                <div className="current__humidity">
                  <span className="humidity__title">Humidity</span>
                  <span className="humidity__value">{this.props.currentElement.main.humidity}%</span>
                </div>
                <div className="current__pressure">
                  <span className="pressure__title">Pressure</span>
                  <span className="pressure__value">{this.props.currentElement.main.pressure}</span>
                </div>



                <div className="current__wind">
                  <span className="wind__title">Wind</span>
                  <span className="wind__value">{this.props.currentElement.wind.speed} m/s</span>
                </div>
                <div className="current__sea">
                  <span className="sea__title">Sea</span>
                  <span className="sea__value">{this.props.currentElement.main.sea_level} HPa</span>
                </div>

              </div>

            </div>
          </div>
        );
    }
}
 
export default CurrentWeather;