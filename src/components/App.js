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
      movies: {},
    };
  }

  handleToggle = () => {
    this.setState({ showCart: !this.state.showCart });
  };

  handleSearch = (rating, adult, keyword) => {
    fetch(
      "https://api.themoviedb.org/3/movie/541?api_key=f1eac36202d95b8df16fcf8afd17c6b0&language=en-CA"
    )
      .then((response) => response.json())
      .then((data) => this.setState({ movies: data }));
    console.log("movies!!!", this.state.movies);
  };

  render() {
    return (
      <div>
        <Header onToggle={this.handleToggle} />
        <ToolBar onSearch={this.handleSearch} />
        <Content />
        <Footer />
        {this.state.showCart ? <Cart /> : null}
      </div>
    );
  }
}

export default App;
