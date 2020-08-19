import React, { Component } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import Content from "./Content";
import Footer from "./Footer";
import Header from "./Header";
import Cart from "./Cart";
import ToolBar from "./ToolBar";

class App extends Component {
  constructor() {
    super();
    this.state = {
      showCart: false,
    };
  }
  render() {
    return (
      <div>
        <Header />
        <ToolBar />
        <Content />
        <Footer />
        <Cart />
        {this.state.showCart.toString()}
      </div>
    );
  }
}

export default App;
