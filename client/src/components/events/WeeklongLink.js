import React, {Component} from "react";
import FormattedDate from '../format/FormattedDate.js';

export default class WeeklongLink extends Component {

  constructor(props) {
    super(props);
    var eventData = props["eventData"];
    this.state = {
      weeklong: eventData
     };
  }

  render() {
    var weeklong = this.state.weeklong;
    if(!weeklong.display){
      return null;
    }
    return (
      <div className='white'>
        <h5 className='title-link' style={{margin: 0}}><a href={'/weeklong/' + weeklong.id}>{weeklong.title}</a></h5>
        <p><FormattedDate type="weeklong" startDate={weeklong.start_date} endDate={weeklong.end_date} /> |
        <a href={'/weeklong/' + weeklong.id + "/stats"}> stats</a></p>
      </div>
    );
  }
}
