import React from 'react';
import selfieImage from "../../assets/images/OverTheEdge.png";

function About() {
  return (
    <section className="my-5">
      <h1 id="about">About Me</h1>
      <p>After many years as a Technology Project Manager and leading project management teams, in 2020 I returned to software engineering. 
          First as a hobby, then to lead an engineering team, and most recently taking a Full Stack Web Bootcamp.
          Inspired by Nature. Relentless in Execution. Creative and Curious. 
          Let me apply my qualities and skils to your next project for an exciting outcome.</p>
          <img src={selfieImage}  alt="cover" />
    </section>
  );
}

export default About;