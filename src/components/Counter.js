import React, { Component } from "react";

class Counter extends Component {
  state = {};
  render() {
    return <div>{this.props.count == 0 ? "zero" : this.props.count}</div>;
  }
}

export default Counter;
