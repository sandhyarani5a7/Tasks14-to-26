import React from 'react';
import { Carousel } from 'react-bootstrap';

const About = () => {
  return (
    <div>
      <h1>About Us</h1>
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={`${process.env.PUBLIC_URL}/imageOne.jpg`}
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>Team Member 1</h3>
            <p>Description about team member 1.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={`${process.env.PUBLIC_URL}/imageTwo.jpeg`}
            alt="Second slide"
          />
          <Carousel.Caption>
            <h3>Team Member 2</h3>
            <p>Description about team member 2.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default About;
