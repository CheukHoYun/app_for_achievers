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
    if (n > 0) return <div>{n}</div>;
    else return <div>zero</div>;
  };

  render() {
    const buttonStyle = {};
    return (
      <header className="header">
        <h2>This is the header! {this.countNumber(this.state.count)}</h2>
        <button style={{ margin: 10 }} onClick={this.handleClick}>
          Cart
        </button>
      </header>
    );
  }
}

export default Header;
