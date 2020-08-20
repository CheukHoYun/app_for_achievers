import React, { Component } from "react";

class Content extends Component {
  constructor() {
    super();
    this.state = {
      movie: {},
    };
  }

  render() {
    return (
      <div className="container-fluid">
        {" "}
        <div className="row">
          <div className="col d-flex justify-content-center">col</div>
          <div className="col d-flex justify-content-center">col</div>
          <div className="col d-flex justify-content-center">col</div>
          <div className="w-100"></div>
          <div className="col d-flex justify-content-center">col</div>
          <div className="col d-flex justify-content-center">col</div>
          <div className="col d-flex justify-content-center">col</div>
          <div className="w-100"></div>
        </div>{" "}
      </div>
    );
  }
}

export default Content;
