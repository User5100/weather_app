import React, { Component } from "react";
import { render } from "react-dom";

class App extends Component {
  render() {
    return <div>Hello, Weather App!</div>;
  }
}

render(<App />, document.getElementById("root"));
