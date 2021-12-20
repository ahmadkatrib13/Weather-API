import React, { Component } from 'react';

import "./ErrorMsg.css";
class ErrorMsg extends React.Component {

    render() {
        if (this.props.err === "") {
            return (
                <div className='errorMsg'>
                    enter a city
                </div>);
        }
        else if (this.props.err === "408")  {
            return (<div className='errorMsg' >
               Check your internet connection
            </div>);
        }else{
            return (<div className='errorMsg' >
            city not found
         </div>);
        }
    }
}

export default ErrorMsg;