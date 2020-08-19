import React, { Component } from "react";

class Content extends Component {
  constructor() {
    super();
    this.state = {
      movie: {},
    };
  }

  componentDidMount() {
    fetch(
      "https://api.themoviedb.org/3/movie/541?api_key=f1eac36202d95b8df16fcf8afd17c6b0&language=en-CA"
    )
      .then((response) => response.json())
      .then((data) => this.setState({ movie: data }));
  }

  render() {
    console.log(this.state.movie);
    return (
      <main className="content">
        {/* <div>{this.state.movie.title}</div> */}
      </main>
    );
  }
}

export default Content;
