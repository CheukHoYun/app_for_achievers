import React, { Component } from "react";
import default_pic from "./no-image.png";

class Movie extends Component {
  constructor() {
    super();
    this.state = { imageLoadError: true };
  }
  render() {
    const movie = this.props.movieInfo;
    const poster_path = "https://image.tmdb.org/t/p/w200" + movie.poster_path;

    return (
      <div className="card" style={{ width: "200px" }}>
        <img
          className="card-img-top"
          src={poster_path}
          onError={(e) => {
            if (this.state.imageLoadError) {
              this.setState({
                imageLoadError: false,
              });
              e.target.src = default_pic;
            }
          }}
        />
        <div className="card-body bg-dark">
          <h5 className="card-title text-center font-weight-bold">
            {movie.title}
          </h5>
        </div>
      </div>

      //   <div>
      //     <img
      //       src={poster_path}
      // onError={(e) => {
      //   if (this.state.imageLoadError) {
      //     this.setState({
      //       imageLoadError: false,
      //     });
      //     e.target.src = default_pic;
      //   }
      // }}
      //     />
      //   </div>
    );
  }
}

export default Movie;
