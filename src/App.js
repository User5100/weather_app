import React, { Component } from "react";
import { render } from "react-dom";
import City from "./components/city";
import Time from "./components/date";
import { H1 } from "./styled-app";

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
    const { data, loading } = this.state;

    if (loading) {
      return <h1>Loading Weather information. Please wait</h1>;
    } else {
      return (
        <div>
          <H1>Weather App</H1>
          <City {...data} />
          <Time />
        </div>
      );
    }
  }
}

render(<App />, document.getElementById("root"));
