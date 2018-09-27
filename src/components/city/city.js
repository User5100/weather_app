import React from "react";

const City = props => {
  const {
    name: city,
    weather: { main, description },
    main: { temp, humidity },
    wind: { speed }
  } = props;

  return (
    <div>
      <section>
        <h2>City - {city}</h2>
        <section>
          <h2>Weather Information</h2>
          <ul>
            <li>Description - {description}</li>
            <li>Main - {main}</li>
            <li>Temp - {temp}</li>
            <li>Humidity - {humidity}</li>
            <li>Wind Speed - {speed} </li>
          </ul>
        </section>
      </section>
    </div>
  );
};

export default City;
