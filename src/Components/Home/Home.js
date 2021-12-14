import React from "react";
import siteLogo from "../Logos/jkComColLOGO.webp";
import ProductCard1 from "../ProductCard/ProductCard"
import ProductCard2 from "../ProductCard/ProductCard1"
import "./Home.css";

const Home = () => {
  return(
    <div>
      <img src={siteLogo} alt="sitelogo"/>
      <main><h1>NEWEST ITEMS</h1></main>
      <div id ="displayCard"> 
      <ProductCard1/>
      <ProductCard2/>
      <ProductCard1/>
      <ProductCard2/>
      <ProductCard1/>
      <ProductCard2/>
      </div>
    </div>
  )
}
export default Home;