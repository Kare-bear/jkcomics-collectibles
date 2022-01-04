import React, {Component} from "react";
import { Link } from "react-router-dom";
import routes from "./routes"

import CategoryHeader from "../CategoryNav/CategoryNav";
import siteLogo from "../Logos/jkComColLOGO.webp";

import './App.css';

class App extends Component{
  render() {
  return <div className="App">
        <Link to ="/">
      <img src={siteLogo} id="siteLogo" alt="sitelogo"/>
      </Link>
      <CategoryHeader/>
     <div>
       {routes}
     </div>
    </div>
  }
}

export default App;
