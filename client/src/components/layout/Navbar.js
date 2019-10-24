import React, { Component } from 'react';
import { BrowserRouter as Router } from "react-router-dom";
import { Helmet } from "react-helmet";

import Routes from './Routes.js';

export default class Navbar extends Component {
  render() {
    return(
      <div>
        <Helmet>
            <title>CU HvZ</title>
        </Helmet>
        <Router>
          <nav>
            <ul>
              <li><a href="/">Home</a></li>
              <li><a href="/about">About</a></li>
              <li><a href="/rules">Rules</a></li>
              <li><a href="/events">Events</a></li>
              <li><a style={{float: 'right'}} id='login_button' href='/login.php'>Login</a></li>
              <li><a style={{float: 'right'}} id='signup_button' href='/signup.php'>Sign Up</a></li>
            </ul>
          </nav>
          <Routes/>
        </Router>
      </div>
    );
  }
}
