import React from "react";


function About(props) {
  const hasBio = props.bio
  return (
    <div id="about">
      <h2>About Me</h2>
      <p>{ hasBio ? props.bio : null}</p>
      <img src="https://i.imgur.com/mV8PQxj.gif" alt="I made this" />
      <h3>Links</h3>
      <a href={props.github}>{props.github}</a>
      <a href={props.linkedin}>{props.linkedin}</a>
      
    </div>
  );
}

export default About;
