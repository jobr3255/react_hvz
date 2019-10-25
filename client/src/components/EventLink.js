import React, {Component} from "react";

export default class EventLink extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="lightslide">
        <div className="container">
          <div className="row">
            <div className="content lightslide-box">
              <h1 className="white">
                <strong>Weeklongs</strong>
              </h1>
              <h1 className="white">
                <strong>Lock-Ins</strong>
              </h1>
              {this.state.apiResponse}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
