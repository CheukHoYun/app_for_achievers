import React, { Component } from "react";

class Content extends Component {
  constructor() {
    super();
    this.state = {
      character: {},
    };
  }

  componentDidMount() {
    fetch("https://swapi.dev/api/people/1")
      .then((response) => response.json())
      .then((data) => this.setState({ character: data }));
  }

  render() {
    return (
      <main className="content">
        <div>{this.state.character.name}</div>
      </main>
    );
  }
}

export default Content;
