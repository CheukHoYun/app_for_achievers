import React, { Component } from "react";

class Footer extends Component {
  state = {};
  render() {
    return (
      <div className="container-fluid d-flex justify-content-center bg-dark text-white p-3">
        <div>
          Disclaimer: This is a project for learning & demonstration purpose
          only.
        </div>
      </div>
    );
  }
}

export default Footer;
