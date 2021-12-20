import React, { Component } from 'react';
import "./WeatherItem.css"



class WeatherItem extends React.Component {
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
        return (
            <div className="grid__day">
                <time>{this.props.element.dt_txt.split(" ")[1].substring(0,5)}</time>
                <img className="day__image" src={require(`../img/weather-icons/${this.getIcon(this.props.element.weather[0].id)}.svg`)} alt={this.props.element.weather.main} placeholder={this.props.element.weather[0].main} />
                <p>{this.props.element.main.temp}&#176;C</p>
            </div>
        )
    }
}

export default WeatherItem;