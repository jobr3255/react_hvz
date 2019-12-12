import React, {Component} from "react";
import FormattedDate from '../format/FormattedDate.js';

export default class LockinLink extends Component {

  constructor(props) {
    super(props);
    var eventData = props["eventData"];
    this.state = {
      lockin: eventData
     };
  }

  render() {
    var lockin = this.state.lockin;
    if(!lockin.display){
      return null;
    }
    var waiverLink = null;
    var waiverLinkPath = lockin.waiver_link_path;
    if(waiverLinkPath != null){
      waiverLink = <span>| <a href={waiverLinkPath} target='_blank'>Waiver</a></span>;
    }

    var activeLinks  = null;
    if(lockin.active){
      activeLinks = <span>| <a href={lockin.eventbrite} target='_blank'>Tickets</a> | <a href={lockin.blaster_eventbrite} target='_blank'>Blaster Rental</a></span>;
    }
    return (
      <div className='white'>
        <h5 className='title-link' style={{margin: 0}}><a href={'/lockin/' + lockin.id}>{lockin.title}</a></h5>
        <p><FormattedDate startDate={lockin.event_date} type="lockin"/> {waiverLink} {activeLinks}</p>
      </div>
    );
  }
}
