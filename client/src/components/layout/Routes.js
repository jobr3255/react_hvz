import React, { Component } from 'react';
import {
  Switch,
  Route
} from "react-router-dom";

import Home from '../../pages/Home.js';
import Events from '../../pages/Events.js';
import About from '../../pages/About.js';
import Rules from '../../pages/Rules.js';
import NotFound from '../errors/NotFound.js';

export default class Routes extends Component {
  render() {
    return(
      <Switch>
        <Route path="/" exact     component={Home}/>
        <Route path="/about"      component={About}/>
        <Route path="/rules"      component={Rules}/>
        <Route path="/events"     component={Events}/>
        <Route                    component={NotFound} />
      </Switch>
    );
  }
}
