import React from "react";
import ReactDOM from "react-dom";
import CityList from './cityList'

var destination = document.querySelector("#app");
//console.log("destination", destination);
  
ReactDOM.render(
    <CityList/>,
    destination
);