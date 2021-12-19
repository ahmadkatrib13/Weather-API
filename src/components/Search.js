import React from "react";

import clear from "../img/weather-icons/clear.svg";
import "./Search.css";
class Search extends React.Component {
  state = {
    input: ""
  };

  render() {
    return (

        <div className="search__bar">
            <input id="city-name" className="search__input" type="text" placeholder="Type in A city name"  onChange={event => {
            this.setState({ input: event.target.value });
          }} />
            <button className="search__button" onClick={event => {
            this.props.handleInput(this.state.input);
          }}>FIND WEATHER</button>
          </div>

    );
  }
}
export default Search;
