import React, { Component } from "react";


import mostlyCloudy from "./img/weather-icons/mostlycloudy.svg";

import "./App.css";

import CurrentWeather from "./components/CurrentWeather";
import WeatherItem from "./components/WeatherItem";
import Search from "./components/Search";
import ErrorMsg from "./components/ErrorMsg";


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      city: "",
      APIKey: "b2138303c7f874edc9e9a9307395c595",
      status: "",
      weatherList: ""
    };
  }

  handleInputChange = value => {
    this.setState({ city: value });
    this.fetchData(value);
  };

  fetchData = city => {
    fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&cnt=8&units=metric&appid=${this.state.APIKey}`)
      .then(res => res.json())
      .then(data => {
        console.log(data);
        this.setState({
          status: data.cod,
          weatherList: data.list
        })
      })
      .catch(err => {
        this.setState({
          status: "408"
      });
  })}





  render() {

    return (
      <div className="app">
        <header className="app__header">
          <Search handleInput={this.handleInputChange} />
        </header>
        
        <main className="app__main">
          {
            this.state.status !=="200"?<ErrorMsg err={this.state.status}/>:
            <>
            <CurrentWeather currentElement={this.state.weatherList[0]} image={mostlyCloudy} />
            <div className="allDay__wrapper">
              <div className="days__styler">
                {
                  this.state.weatherList.map((item, index) => {
                    if (index < 8 && index > 0) return <WeatherItem element={item} />
                  })
                }

              </div>
            </div>
          </>

          }
        </main>

      </div>
    );
  }
}

export default App;
