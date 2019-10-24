import React, { Component } from 'react';

import Navbar from './components/layout/Navbar.js';
import Footer from './components/layout/Footer.js';

class App extends Component {
  render() {
    return(
      <div>
        <Navbar/>
        <Footer/>
      </div>
    );
  }
}

export default App;
