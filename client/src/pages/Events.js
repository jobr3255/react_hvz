import React, {Component} from "react";

import FormattedDate from '../assets/js/dataFormat.js';
// import Lockin from '../components/events/Lockin.js';

export default class Events extends Component {
  constructor(props) {
    super(props);
    this.state = {
      weeklongs: "",
      lockins: ""
     };
  }

  callAPI() {
    fetch("http://localhost:9000/api/events/weeklongs")
      .then(res => res.json())
      .then(res => this.setState({ weeklongs: res }));
    fetch("http://localhost:9000/api/events/lockins")
      .then(res => res.json())
      .then(res => this.setState({ lockins: res }));
  }

  componentDidMount() {
    this.callAPI();
  }

  render() {
    const weeklongs = []
    const lockins = []
    var event;
    var element;
    for (event of this.state.weeklongs) {
      element = (
        <div key={event["id"]} className='white'>
          <h5 className='title-link' style={{margin: 0}}><a href={'weeklong/info.php?id=' + event["id"]}>{event["title"]}</a></h5>
          <p>{FormattedDate.formatDate(event["start_date"], event["end_date"])} |
          <a href={'weeklong/info.php?id=' + event["id"]} > mission details</a> |
          <a href={'weeklong/stats.php?id=' + event["id"]}> stats</a></p>
        </div> );
      weeklongs.push(element);
    }

    for(event of this.state.lockins){
      element = (
        <div key={event["id"]} className='white'>
        <h5 className='title-link' style={{margin: 0}}><a href={'/lockin/info.php?id=' + element["id"]}>{event["title"]}</a></h5>
          <p>{FormattedDate.formatDate(event["event_date"])}</p>
        </div>  );
      lockins.push(element);
    }
    return (
      <div className="lightslide">
        <div className="container">
          <div className="row">
            <div className="content lightslide-box">
              <h1 className="white">
                <strong>Weeklongs</strong>
              </h1>
              {weeklongs}
              <h1 className="white">
                <strong>Lock-Ins</strong>
              </h1>
              {lockins}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
