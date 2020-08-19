import React, { Component } from "react";
import "./App.css";
import Content from "./Content";
import Footer from "./Footer";
import Header from "./Header";
import Cart from "./Cart";

class App extends Component {
  constructor() {
    super();
    this.state = {
      somevar: "Hello World",
    };
  }
  render() {
    return (
      <div>
        <Header />
        <Content />
        <Footer />
        <Cart />
        {this.state.somevar}
      </div>
    );
  }
}

export default App;
