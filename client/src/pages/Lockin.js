import React, {Component} from "react";

import ResponseError from '../components/errors/ResponseError.js';
import FormattedDate from '../components/format/FormattedDate.js';
import FormattedDetails from '../components/format/FormattedDetails.js';

export default class Lockin extends Component {

  constructor(props) {
    super(props);
    this.state = {
      lockin: null,
      status: null,
      error: null
     };
  }

  callAPI(id) {
    fetch("http://localhost:9000/api/event/lockin/"+id)
      .then(res => res.json())
      .then(res => {
        // console.log(res);
        if(res.status !== 200){
          this.setState({
            error: res.error,
            status: res.status
          });
          console.error(res.error);
        }else{
          // console.log(res.data);
          this.setState({
            lockin: res.data,
            status: res.status
          });
        }

      });
  }

  componentDidMount() {
    const { match: { params } } = this.props;
    this.callAPI(params["id"]);
  }

  buildContent(){
    var lockin = this.state.lockin;
    let waiverLink = null;
    let waiverLinkPath = lockin.waiver_link_path;
    if(waiverLinkPath != null){
      waiverLink = <span>| <a href={waiverLinkPath} target='_blank'>Waiver</a></span>;
    }

    let activeLinks  = null;
    if(lockin.active){
      activeLinks = <span>| <a href={lockin.eventbrite} target='_blank'>Tickets</a> | <a href={lockin.blaster_eventbrite} target='_blank'>Blaster Rental</a></span>;
    }
    return (
      <div className="white">
        <h4 className='title-link' style={{margin: 0}}>{lockin.title}</h4>
        <p>
          <FormattedDate type="lockin" startDate={lockin.event_date} /> {waiverLink} {activeLinks}
          <br/>
          Doors open at 9pm and close at 10pm
        </p>
        <div id="Details">
          <FormattedDetails text={lockin.details} />
        </div>
      </div>
    );
  }

  render() {
    let lockinContent = null;
    if(this.state.status !== null){
      if(this.state.status === 200){
        lockinContent = this.buildContent();
      }else{
        lockinContent = <ResponseError status={this.state.status} message={this.state.error.message} />;
      }
    }
    return (
      <div className="container">
        <div className="content lightslide-box">
          {lockinContent}
        </div>
      </div>
    );
  }
}
