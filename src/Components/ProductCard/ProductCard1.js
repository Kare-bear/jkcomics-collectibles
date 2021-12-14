import React, { Component } from "react";
import TestImage1 from "../Logos/Pipes1.jpeg";

export default class ProductCard extends Component{
  //Card should contain Image of products, name of product, price and should be clickable to link to Product Page

  render(){
    return(
      <div id="cardSet">
        <div>
          <img src={TestImage1} id="testImages" alt="placeholderTESTIMAGE"/>
        </div>
        <div id="cardText"><h2>Transformers Kingdom WFC-K32 Autobot Pipes</h2></div>
        <div><h3>$26.99</h3></div>
      </div>
    )
  }
}