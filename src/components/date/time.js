import React from "react";
import { P, Section } from "./styled-time";

const Time = () => {
  const date = new Date().toDateString();

  return (
    <Section>
      <h2>Date</h2>
      <P>{date}</P>
    </Section>
  );
};

export default Time;
