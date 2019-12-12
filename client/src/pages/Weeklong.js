import React, {Component} from "react";

// import FormattedDate from '../assets/js/dataFormat.js';
// import Lockin from '../components/events/Lockin.js';

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
    return (
      <div className="lightslide">
      </div>
    );
  }
}
