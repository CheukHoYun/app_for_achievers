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
    const l = this.props.movieList;
    let returnValue = [];
    for (let i = 0; i < l.length; i++) {
      returnValue.push(
        <div className="col d-flex justify-content-center">
          <div className="m-2">{this.props.movieList[i].title}</div>
        </div>
      );
      if (i % 3 === 2) {
        returnValue.push(<div className="w-100"></div>);
      }
    }
    if (l.length % 3 === 1) {
      returnValue.push(
        <div className="col d-flex justify-content-center">
          <div className="m-2"></div>
        </div>
      );
    }
    if (l.length % 3 === 2) {
      returnValue.push(
        <div className="col d-flex justify-content-center">
          <div className="m-2"></div>
        </div>
      );
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
