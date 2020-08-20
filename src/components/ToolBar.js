import React, { Component } from "react";

class ToolBar extends Component {
  constructor() {
    super();
    this.state = {
      keyword: "",
      isAdult: false,
      rated: 0,
    };
  }

  handleChange = (event) => {
    const { name, value, type, checked } = event.target;
    type === "checkbox"
      ? this.setState({ [name]: checked })
      : this.setState({ [name]: value });
  };

  changeStar = (x) => {
    this.setState({ rated: x });
  };

  toStars = (n) => {
    let s = "";
    for (let i = 0; i < n; i++) {
      s += "★";
    }
    return s;
  };

  render() {
    return (
      <div
        style={{ fontSize: 14 }}
        className="row justify-content-center bg-secondary "
      >
        <form className="form-inline">
          <div className="form-group">
            <div className="dropdown">
              <button
                type="button"
                className="btn btn-primary dropdown-toggle"
                data-toggle="dropdown"
              >
                {this.state.rated == 0
                  ? "Rated"
                  : this.toStars(this.state.rated)}
              </button>
              <div className="dropdown-menu">
                <a
                  style={{ color: "rgb(255,215,0)" }}
                  className="dropdown-item"
                  href="#"
                  onClick={() => this.changeStar(5)}
                >
                  ★★★★★
                </a>
                <a
                  style={{ color: "rgb(255,215,0)" }}
                  className="dropdown-item"
                  href="#"
                  onClick={() => this.changeStar(4)}
                >
                  ★★★★
                </a>
                <a
                  style={{ color: "rgb(255,215,0)" }}
                  className="dropdown-item"
                  href="#"
                  onClick={() => this.changeStar(3)}
                >
                  ★★★
                </a>
              </div>
            </div>
            <label style={{ marginLeft: 10, marginRight: 3 }}>Keyword: </label>
            <input
              type="text"
              className="form-control"
              value={this.state.keyword}
              id="keyword"
              placeholder="e.g. Spiderman"
              name="keyword"
              onChange={this.handleChange}
            ></input>
          </div>
          <div className="checkbox">
            <label>
              <input
                style={{ marginLeft: 15, marginRight: 3 }}
                type="checkbox"
                name="isAdult"
                checked={this.state.isAdult}
                onChange={this.handleChange}
              ></input>
              Show Adult
            </label>
          </div>
          <button
            style={{ margin: 10 }}
            type="submit"
            className="btn btn-primary"
            onClick={() =>
              this.props.onSearch(
                this.state.rated,
                this.state.isAdult,
                this.state.keyword
              )
            }
          >
            Search
          </button>
          <div>{this.state.isAdult.toString()}</div>
          <div>{this.state.keyword}</div>
          <div>{this.state.rated}</div>
        </form>
      </div>
    );
  }
}

export default ToolBar;
