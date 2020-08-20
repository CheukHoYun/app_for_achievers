import React, { Component } from "react";
import "./App.css";
import Content from "./Content";
import Footer from "./Footer";
import Header from "./Header";
import Cart from "./Cart";
import ToolBar from "./ToolBar";
import Counter from "./Counter";

class App extends Component {
  constructor() {
    super();
    this.state = {
      showCart: false,
      movies: {},
      rating: -1,
      orders: [],
    };
  }

  handleToggle = () => {
    this.setState({ showCart: !this.state.showCart });
  };

  async fetchposts(adult, keyword) {
    let response = await fetch(
      "https://api.themoviedb.org/3/search/movie?api_key=f1eac36202d95b8df16fcf8afd17c6b0&language=en-US&query=" +
        keyword +
        "&page=1&include_adult=" +
        adult.toString()
    )
      .then((response) => response.json())
      .then((data) => this.setState({ movies: data.results }));
  }

  addItem = (movie) => {
    let exist = false;
    for (let i = 0; i < this.state.orders.length; i++) {
      if (this.state.orders[i].id == movie.id) {
        exist = true;
      }
    }
    if (!exist) {
      this.setState({ orders: this.state.orders.concat(movie) });
    }
  };

  removeItem = (movie_id) => {
    console.log("Calling remove on movie id: ", movie_id);
    let new_orders = [];
    for (let i = 0; i < this.state.orders.length; i++) {
      console.log(this.state.orders[i].id);
      if (this.state.orders[i].id != movie_id) {
        console.log("keeping ", movie_id);
        new_orders = new_orders.concat(this.state.orders[i]);
      }
    }
    console.log(new_orders);
    this.setState({ orders: new_orders });
  };

  changeStar = (star) => {
    this.setState({ rating: star });
  };

  handleSearch = (adult, keyword) => {
    this.fetchposts(adult, keyword);
  };

  render() {
    return (
      <div>
        <div className="sticky-top">
          <Header
            onToggle={this.handleToggle}
            count={this.state.orders.length}
          />
          <ToolBar
            rating={this.state.rating}
            changeStar={this.changeStar}
            onSearch={this.handleSearch}
          />
        </div>

        <Content
          addItem={this.addItem}
          rating={this.state.rating}
          movieList={
            Object.keys(this.state.movies).length === 0 ? {} : this.state.movies
          }
        />
        <Footer />
        {this.state.showCart ? (
          <div style={{ position: "fixed", right: 50, top: 100 }}>
            <Cart
              toggle={this.handleToggle}
              removeItem={this.removeItem}
              orders={this.state.orders}
            />
          </div>
        ) : null}
      </div>
    );
  }
}

export default App;
