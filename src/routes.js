import React from 'react';
import {Switch, Route} from 'react-router-dom';

import Home from './Components/Home/Home'; 
import ProductPage from './Components/ProductPage/ProductPage';

export default(
  <Switch>
    <Route component={Home} exact path="/"/>
    <Route component={ProductPage} path="/product-page"/>
  </Switch>
)