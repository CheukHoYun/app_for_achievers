import React, { Component } from "react";
import Counter from "./Counter";

class Header extends Component {
  constructor() {
    super();
  }

  countNumber = (n) => {
    if (n > 0) return n;
    else return "zero";
  };

  render() {
    const buttonStyle = {};
    return (
      <div className="row bg-light">
        <div className="col text-center">
          <h1
            style={{
              fontFamily: "Snell Roundhand, cursive",
            }}
            className=" text-center m-2"
          >
            Yonge Street Video
          </h1>
        </div>
        <button
          type="button"
          className="btn btn-success m-2 mr-5 ml-auto"
          onClick={this.props.onToggle}
        >
          <span className="glyphicon glyphicon-shopping-cart"></span> Cart
          <span className="badge badge-light ml-2">{this.props.count}</span>
        </button>
      </div>
    );
  }
}

export default Header;
