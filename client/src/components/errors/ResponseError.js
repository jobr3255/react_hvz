import React, {Component} from "react";

const STATUS = {
  200: "OK",
  201: "Created",
  400: "Bad Request",
  401: "Unauthorized",
  403: "Forbidden",
  404: "Not Found",
  409: "Conflict"
};

export default class ResponseError extends Component {

  constructor(props) {
    super(props);
    this.state = {
      status: props.status,
      message: props.message
    }
  }

  render() {
    return (
      <div>
        <h1 className="white">
          <strong>{this.state.status} {STATUS[this.state.status]}</strong>
        </h1>
        {this.state.message}
      </div>
    );
  }
}
