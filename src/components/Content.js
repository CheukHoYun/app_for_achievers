import React, { Component } from "react";
import Movie from "./Movie";

class Content extends Component {
  constructor() {
    super();
    this.state = {
      movie: {},
    };
  }

  contentGen = () => {
    const rating = this.props.rating;
    const l = this.props.movieList;
    let returnValue = [];
    let k = 0;
    for (let i = 0; i < l.length; i++) {
      if (this.props.movieList[i].vote_average >= rating) {
        k++;
        returnValue.push(
          <div
            key={"newcol_" + i}
            className="col d-flex justify-content-center"
          >
            <div key={"movieCard_" + i} className="m-3 text-white">
              <Movie
                addItem={this.props.addItem}
                key={"movie" + i}
                movieInfo={this.props.movieList[i]}
              />
            </div>
          </div>
        );
      }
    }

    return returnValue;
  };

  render() {
    console.log("what");
    console.log("hello,", this.props.movieList);

    return (
      <div style={{ backgroundColor: "black" }} className="container-fluid">
        <div className="row m-10">{this.contentGen()}</div>{" "}
      </div>
    );
  }
}

export default Content;
