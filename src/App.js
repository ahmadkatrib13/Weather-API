import React, { Component } from "react";
import Search from "./components/Search";

import SayHi, { SayHello } from "./components/WeatherItem";
import fakeWeatherData from "./fakeWeatherData.json";
import mostlyCloudy from "./img/weather-icons/mostlycloudy.svg";

import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "Ahmad"
    };
  }

  handleInputChange = value => {
    this.setState({ name: value });
  };

  render() {
    return (
      <div className="app">
        <header className="app__header">
          <div className="search__bar">
            <input className="search__input" type="text" placeholder="Type in A city name" />
            <button className="search__button">FIND WEATHER</button>
          </div>
        </header>
        <main className="app__main">
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
          <div className="allDay__wrapper">
            <div className="days__styler">
              <div className="grid__day">
                <time>03:00</time>
                <img className="day__image" src={mostlyCloudy} alt="storm icon" placeholder="storm" />
                <p>8&#176;C</p>
              </div>
              <div className="grid__day">
                <time>06:00</time>
                <img className="day__image" src={mostlyCloudy} alt="storm icon" placeholder="storm" />
                <p>9&#176;C</p>
              </div>
              <div className="grid__day">
                <time>09:00</time>
                <img className="day__image" src={mostlyCloudy} alt="storm icon" placeholder="storm" />
                <p>14&#176;C</p>
              </div>
              <div className="grid__day">
                <time>12:00</time>
                <img className="day__image" src={mostlyCloudy} alt="storm icon" placeholder="storm" />
                <p>17&#176;C</p>
              </div>
              <div className="grid__day">
                <time>15:00</time>
                <img className="day__image" src={mostlyCloudy} alt="storm icon" placeholder="storm" />
                <p>18&#176;C</p>
              </div>
              <div className="grid__day">
                <time>18:00</time>
                <img className="day__image" src={mostlyCloudy} alt="storm icon" placeholder="storm" />
                <p>16&#176;C</p>
              </div>
              <div className="grid__day">
                <time>21:00</time>
                <img className="day__image" src={mostlyCloudy} alt="storm icon" placeholder="storm" />
                <p>13&#176;C</p>
              </div>
             

              

            </div>
          </div>


        </main>





        {/* <SayHi />
        <SayHello color="black" name={this.state.name} />
        <Search handleInput={this.handleInputChange} /> */}
      </div>
    );
  }
}

export default App;
