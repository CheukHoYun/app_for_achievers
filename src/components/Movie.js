import React, { Component } from "react";
import default_pic from "./no-image.png";

class Movie extends Component {
  constructor() {
    super();
    this.state = { imageLoadError: true, show_descript: false, picOpaq: 1 };
  }

  price_Gen = (p) => {
    if (p > 20) {
      p = 20;
    }
    return Math.ceil(p) - 0.01;
  };

  date_to_year = (d) => {
    return "(" + d.slice(0, 4) + ")";
  };

  shrink_text = (text) => {
    if (text.length > 514) {
      return text.slice(0, 514) + "...";
    } else {
      return text;
    }
  };

  render() {
    const movie = this.props.movieInfo;
    const poster_path = "https://image.tmdb.org/t/p/w500" + movie.poster_path;
    const price = "$" + this.price_Gen(movie.popularity);
    const description = (
      <div
        style={{ position: "absolute", left: 0, top: 0 }}
        className="panel panel-default"
      >
        <div className="panel-body m-3 text-dark">
          <h1>★ {movie.vote_average.toFixed(1)}</h1>
          <p className="lead">{this.shrink_text(movie.overview)}</p>
        </div>
      </div>
    );

    return (
      <div className="card" style={{ width: "230px" }}>
        {this.state.show_descript ? description : null}
        <img
          onMouseOver={() =>
            this.setState({ show_descript: true, picOpaq: 0.1 })
          }
          onMouseOut={() =>
            this.setState({ show_descript: false, picOpaq: 1.0 })
          }
          style={{ opacity: this.state.picOpaq }}
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
          <h5 className="card-title font-weight-bold">
            {movie.title} {this.date_to_year(movie.release_date)}
          </h5>
          <button
            onClick={() => this.props.addItem(movie)}
            className="btn btn-primary font-weight-bold"
          >
            <span className="glyphicon glyphicon-shopping-cart"></span>
            {price}
          </button>
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
