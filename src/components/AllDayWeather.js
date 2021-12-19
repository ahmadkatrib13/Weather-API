import React from 'react';

import mostlyCloudy from "../img/weather-icons/mostlycloudy.svg";

import "./AllDayWeather.css";


class AllDayWeather extends React.Component {
    render() {
        return (
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
        );
    }
}

export default AllDayWeather;