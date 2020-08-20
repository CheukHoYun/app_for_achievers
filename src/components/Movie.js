import React, { Component } from "react";

class Movie extends Component {
  state = {};
  render() {
    return (
      <div>
        {this.props.movie === undefined ? null : this.props.movie.title}
      </div>
    );
  }
}

export default Movie;
