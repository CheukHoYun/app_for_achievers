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
      <div className="container-fluid bg-light">
        <h1
          style={{
            textAlign: "center",
            margin: 5,
            fontFamily: "Snell Roundhand, cursive",
          }}
        >
          Yonge Street Video
        </h1>
        <button
          style={{ position: "absolute", right: 0, top: 0, margin: 10 }}
          type="button"
          className="btn btn-success"
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
