import React from 'react';
import './about.css';
import Card from '../card/card'; // Import Card component

const About = () => {
  return (
    <div className="about">
      <h1>About Us</h1>
      <div className="intro">
        <p>
          We are four school friends united by a common goal: to make a change in society <br /> using our expertise in technology. With diverse skills and a passion for innovation, we aim to create solutions that positively impact the world around us.
        </p>
      </div>
      <div className="card-wrapper">
        <Card founderIndex={0} /> 
        <Card founderIndex={1} /> 
        <Card founderIndex={2} /> 
        <Card founderIndex={3} />
      </div>
    </div>
  );
};

export default About;
