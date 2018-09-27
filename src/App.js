import React, { Component } from "react";
import { render } from "react-dom";

function getUrl(id) {
  return `http://api.openweathermap.org/data/2.5/weather?id=${id}&APPID=${
    process.env.API_KEY
  }`;
}

class App extends Component {
  state = {
    data: {},
    loading: true
  };

  componentDidMount() {
    const url = getUrl(2643744);

    fetch(url)
      .then(response => {
        response.json().then(data => {
          this.setState({ data, loading: false });
        });
      })
      .catch(function() {});
  }

  render() {
    return <div>Hello, Weather App!</div>;
  }
}

render(<App />, document.getElementById("root"));
