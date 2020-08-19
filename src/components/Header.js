import React, { Component } from "react";

class Header extends Component {
  constructor() {
    super();
    this.state = {
      count: 0,
    };
  }

  handleClick = () => {
    this.setState((prev) => {
      return { count: prev.count + 1 };
    });
  };

  countNumber = (n) => {
    if (n > 0) return n;
    else return "zero";
  };

  render() {
    const buttonStyle = {};
    return (
      <header className="header">
        <p>This is the header!</p>
        <p>{this.countNumber(this.state.count)}</p>
        <button style={{ margin: 10 }} onClick={this.handleClick}>
          Cart
        </button>
      </header>
    );
  }
}

export default Header;
