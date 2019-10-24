import React, { Component } from 'react';

export default class Footer extends Component {
  render() {
    return(
      <div className="section footer">
        <div className="footer-container">
          <span className="footer-box">
            Any questions?<br/>
            <a className="button button-primary" href="mailto:humansvszombies@Colorado.edu">Email Us</a>
          </span>
          <span className="footer-box">
            Join our discord! <br/>
            <a className="button button-primary" href="https://discord.gg/nzqG7Wk">Discord</a>
          </span>
          <span className="footer-box">
            Follow us <br/>
            <a className="button button-primary" href="http://www.facebook.com/HvZatCU/" target="_blank">Facebook</a>
          </span>
          <span className="footer-box">
            Join our team! <br/>
            <a className="button button-primary" href="https://docs.google.com/forms/d/e/1FAIpQLSeCbxWdl3ozaa_9fqwBj_W7CT-RRn2lHCZfvQvCITCujijF7g/viewform?usp=sf_link" target="_blank">Apply here!</a>
          </span>
          <span className="footer-box">
            Enjoy our events? <br/>
            <a className="button button-primary" href="https://www.eventbrite.com/e/cu-hvz-2018-spring-donations-tickets-60673535177" target="_blank">Donate!</a>
          </span>
        </div>
      </div>
    );
  }
}
