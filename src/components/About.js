import React from "react";
import { image } from "../data/data";

function About() {
  return (
    <div id="about">
      <h2>About Me</h2>
      <p>React empowers developers to build dynamic and responsive user interfaces with the speed of a framework and the flexibility of a library.</p>
      <img src={image} alt="I made this" />
    </div>
  );
}

export default About;
