import React, {Component} from "react";

import ResponseError from '../components/errors/ResponseError.js';
import FormattedDate from '../components/format/FormattedDate.js';
// import FormattedDetails from '../components/format/FormattedDetails.js';

export default class Weeklong extends Component {

  constructor(props) {
    super(props);
    this.state = {
      weeklong: null,
      status: null,
      error: null
     };
  }

  callAPI(id) {
    fetch("http://localhost:9000/api/event/weeklong/"+id)
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
          console.log(res.data);
          this.setState({
            weeklong: res.data,
            status: res.status
          });
        }

      });
  }

  componentDidMount() {
    const { match: { params } } = this.props;
    this.callAPI(params["id"]);
  }

  render() {
    var weeklong = this.state.weeklong;
    let weeklongContent = null;
    if(this.state.status !== null){
      if(this.state.status === 200){
        weeklongContent = (
          <div className='white'>
            <h5 className='title-link' style={{margin: 0}}><a href={'/weeklong/' + weeklong.id}>{weeklong.title}</a></h5>
            <p><FormattedDate type="weeklong" startDate={weeklong.start_date} endDate={weeklong.end_date} /> |
            <a href={'/weeklong/' + weeklong.id + "/stats"}> stats</a></p>
          </div>
        );
      }else{
        weeklongContent = <ResponseError status={this.state.status} message={this.state.error.message} />;
      }
    }
    return (
      <div className="container">
        <div className="content lightslide-box">
          {weeklongContent}
        </div>
      </div>
    );
  }
}
