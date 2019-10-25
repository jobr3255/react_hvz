import React, {Component} from "react";

export default class Lockin extends Component {
  render() {
    return (
      <div className='white'>
        <h3 className='title-link'><a href='/lockin/info.php?id=$lockinID'>{this.props.title}</a></h3>
        <p>{this.props.date}</p>
      </div>
    );
  }
}
