import React, { Component } from "react";
import ContactCard from "./contactCard";

class Content extends Component {
  state = {};
  render() {
    return (
      <main className="content">
        <ContactCard />
        <ContactCard />
      </main>
    );
  }
}

export default Content;
