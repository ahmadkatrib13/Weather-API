import React, { Component } from "react";


import mostlyCloudy from "./img/weather-icons/mostlycloudy.svg";

import "./App.css";

import CurrentWeather from "./components/CurrentWeather";
import WeatherItem from "./components/WeatherItem";
 import Search from "./components/Search";
import fakeWeatherData from "./fakeWeatherData.json";


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      city: "",
      weatherList:fakeWeatherData.list
    };
  }

  handleInputChange = value => {
    this.setState({ city: value });
  };

  

  render() {
    return (
      <div className="app">
        <header className="app__header">
          <Search handleInput={this.handleInputChange} />
        </header>
        <main className="app__main">
          <CurrentWeather currentElement={this.state.weatherList[0]} image={mostlyCloudy}/>
          <div className="allDay__wrapper">
          <div className="days__styler">
            {
              this.state.weatherList.map((item,index)=>{
                if(index<8 && index>0) return <WeatherItem element={item}/>
              })
            }
          
          </div>
            </div>
        </main>
      </div>
    );
  }
}

export default App;
