import React, { Component } from "react";
import Search from "./components/Search";
import fakeWeatherData from "./fakeWeatherData.json";
import mostlyCloudy from "./img/weather-icons/mostlycloudy.svg";

import "./App.css";
import CurrentWeather from "./components/CurrentWeather";
import AllDayWeather from "./components/AllDayWeather";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      city: ""
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
          <CurrentWeather />
          <AllDayWeather />
        </main>
      </div>
    );
  }
}

export default App;
