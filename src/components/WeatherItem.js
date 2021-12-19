import React, { Component } from 'react';
import "./WeatherItem.css"
import mostlyCloudy from "../img/weather-icons/mostlycloudy.svg";


class WeatherItem extends React.Component {

    FehrenheiToCelsius =(f)=>{return Math.round(f-273.15)};

    render() {
        return (
            <div className="grid__day">
                <time>{this.props.element.dt_txt.split(" ")[1].substring(0,5)}</time>
                <img className="day__image" src={mostlyCloudy} alt="storm icon" placeholder="storm" />
                <p>{this.FehrenheiToCelsius(this.props.element.main.temp)}&#176;C</p>
            </div>
        )
    }
}

export default WeatherItem;