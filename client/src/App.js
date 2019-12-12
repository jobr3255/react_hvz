import React, { Component } from 'react';

import Navbar from './components/layout/Navbar.js';
import Footer from './components/layout/Footer.js';

// This is to suppress warnings that are not hurting anything
const SUPPRESS = [
  "componentWillMount"
]
// define a new console
var console=(function(oldCons){
  return {
    log: function(text){
      oldCons.log(text);
    },
    info: function (text) {
      oldCons.info(text);
    },
    warn: function (text) {
      for(var keyWord of SUPPRESS){
        if(text.indexOf(keyWord) >= 0){
          return;
        }
      }
      oldCons.warn(text);
    },
    error: function (text) {
      oldCons.error(text);
    }
  };
}(window.console));

//Then redefine the old console
window.console = console;

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
