import React, { Component } from "react";

export default class CategorySide extends Component{
// List of all available Product categories

  render(){
    return(
      <div>
        <div id="boxGroup">
          <p id="stationaryBox">PreOrders</p>
          <p id="stationaryBox">New Arrivals</p>
        </div>
        <div id="brandLogos">
          <p>Transformers</p>
          <p>Pokemon</p>
          <p>Marvel</p>
          <p>Star Wars</p>
          <p>Power Rangers</p>
        </div>   
         
        </div>
    )
  }
}