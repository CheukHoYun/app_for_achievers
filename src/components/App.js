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

  async fetchposts(rating, adult, keyword) {
    let response = await fetch(
      "https://api.themoviedb.org/3/search/movie?api_key=f1eac36202d95b8df16fcf8afd17c6b0&language=en-US&query=" +
        keyword +
        "&page=1&include_adult=" +
        adult
    )
      .then((response) => response.json())
      .then((data) => this.setState({ movies: data }));
    console.log("movies!!!", this.state.movies);
  }

  handleSearch = (rating, adult, keyword) => {
    this.fetchposts(rating, adult, keyword);
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
