import React, { Component } from "react";

class ToolBar extends Component {
  state = {};
  render() {
    return (
      <div className="row justify-content-center bg-secondary">
        <form className="form-inline">
          <div className="form-group">
            <div class="dropdown">
              <button
                class="btn btn-info dropdown-toggle"
                type="button"
                id="dropdownMenuButton"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Rated
              </button>
              <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                <a
                  style={{ color: "rgb(255,215,0)" }}
                  class="dropdown-item"
                  href="#"
                >
                  ★★★★★
                </a>
                <a
                  style={{ color: "rgb(255,215,0)" }}
                  class="dropdown-item"
                  href="#"
                >
                  ★★★★
                </a>
                <a
                  style={{ color: "rgb(255,215,0)" }}
                  class="dropdown-item"
                  href="#"
                >
                  ★★★
                </a>
              </div>
            </div>
            <label
              style={{ "margin-left": 10, "margin-right": 3 }}
              for="keyword"
            >
              Keyword:{" "}
            </label>
            <input
              type="text"
              className="form-control"
              id="keyword"
              placeholder="e.g. Spiderman"
              name="keyword"
            ></input>
          </div>
          <div className="checkbox">
            <label>
              <input
                style={{ "margin-left": 10, "margin-right": 3 }}
                type="checkbox"
                name="show_adult"
              ></input>
              Show Adult
            </label>
          </div>
          <button style={{ margin: 10 }} type="submit" class="btn btn-primary">
            Search
          </button>
        </form>
      </div>
    );
  }
}

export default ToolBar;
