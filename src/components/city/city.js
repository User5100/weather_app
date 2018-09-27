import React from "react";
import { Section, LI, UL } from "./styled-city";

const City = props => {
  const {
    name: city,
    weather: { main, description },
    main: { temp, humidity },
    wind: { speed }
  } = props;

  return (
    <div>
      <Section>
        <h2>City - {city}</h2>
        <Section>
          <h2>Weather Information</h2>
          <UL>
            <LI>Description - {description}</LI>
            <LI>Main - {main}</LI>
            <LI>Temp - {temp}</LI>
            <LI>Humidity - {humidity}</LI>
            <LI>Wind Speed - {speed} </LI>
          </UL>
        </Section>
      </Section>
    </div>
  );
};

export default City;
