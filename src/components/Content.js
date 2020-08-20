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
    for (let i = 0, k = 0; i < l.length; i++) {
      if (this.props.movieList[i].vote_average > rating) {
        k++;
        returnValue.push(
          <div
            key={"newcol_" + i}
            className="col d-flex justify-content-center"
          >
            <div key={"movie_" + i} className="m-2 text-white">
              {this.props.movieList[i].title}{" "}
              {this.props.movieList[i].vote_average}
            </div>
          </div>
        );
      }
      if (k % 3 == 0) {
        returnValue.push(<div key={"newline_" + i} className="w-100"></div>);
      }
    }
    // if (l.length % 3 === 1) {
    //   returnValue.push(
    //     <div
    //       key={"placeholder_1"}
    //       className="col d-flex justify-content-center"
    //     >
    //       <div className="m-2"></div>
    //     </div>
    //   );
    // }
    // if (l.length % 3 === 2) {
    //   returnValue.push(
    //     <div
    //       key={"placeholder_2"}
    //       className="col d-flex justify-content-center"
    //     >
    //       <div className="m-2"></div>
    //     </div>
    //   );
    // }
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
