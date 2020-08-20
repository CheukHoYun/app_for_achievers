import React, { Component } from "react";
import "./App.css";
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

  handleToggle = () => {
    this.setState({ showCart: !this.state.showCart });
  };

  render() {
    return (
      <div>
        <Header onToggle={this.handleToggle} />
        <ToolBar />
        <Content />
        <Footer />
        {this.state.showCart ? <Cart /> : null}
      </div>
    );
  }
}

export default App;
