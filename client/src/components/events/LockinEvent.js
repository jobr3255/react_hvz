import React, {Component} from "react";

export default class Lockin extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div class='white'>
      <h4 class='title-link' style='margin: 0;'><a href='/lockin/info.php?id=$lockinID'>{this.props.title}</a></h3>
      <p>{this.props.date}</p>
      </div>
    );
  }
}
