import React, { Component } from 'react';
import { Helmet } from "react-helmet";

export default class Home extends Component {
  render() {
    return (
      <div className="App container">
        <Helmet>
            <title>Home</title>
        </Helmet>
        <div className="five columns">
          <h1 className="section-heading">Humans
          <span className="white"> versus </span>Zombies</h1>
          <h2 className="grey subheader">University of Colorado <strong className="deeporange">Boulder</strong></h2>
          <img src="/images/skull.png" class="u-max-full-width" alt="Skull"/>
        </div>
        <div className="six columns lightslide-box content">
          <h5>
          Humans vs Zombies is a modified tag game in which students use Nerf blasters, tactics, and teamwork to survive a mock zombie apocalypse. Once tagged by a zombie player, the human becomes a zombie. The nerf equipment is used to stun and temporarily disable the oncoming zombie threat. Humans vs Zombies at CU Boulder is an organization that hold large scale events where CU students, alumni, and students from other schools can gather and survive the apocalypse together.
          </h5>
        </div>
      </div>
    );
  }
}
// <p className="App-intro">{this.state.apiResponse}</p>
