import React, {Component} from "react";
import Home from "../Home/Home";
import CategoryHeader from "../CategoryNav/CategoryNav";
import siteLogo from "../Logos/jkComColLOGO.webp";
import "./Main.css";



class Main extends Component{
  render() {
    return <div id="main">
    <img src={siteLogo} id="siteLogo" alt="sitelogo"/>
      <CategoryHeader/>
     <Home/>
    
    </div>
  }
}

export default Main;