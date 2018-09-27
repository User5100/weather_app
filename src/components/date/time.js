import React from "react";

const Time = () => {
  const date = new Date().toDateString();

  return (
    <section>
      <h2>Date</h2>
      <p>{date}</p>
    </section>
  );
};

export default Time;
