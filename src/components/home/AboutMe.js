// src/components/AboutMe.js
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import myPhoto from '../../assets/img/my_photo.jpg';

export const AboutMe = () => {
  return (
    <section className="about-me" id="aboutme">
      <Container>
        <Row>
          <Col xs={12} md={12}>
            <h2>About Me</h2>
          </Col>
          <Col xs={12} md={6}>
            <div className="about-me-description">
              <p>
                Hello, I'm Mattia, i like taking photos, a bit of street photoghraphy and travel photography, i am currently using a Fujifilm xt-20. I also like to code, mainly backend and managing data and i would love to make it my future job. I am also a space engineer and i am currently traveling the world to explore new cultures, taking photos and find a place to settle down. If you are interested in my work and would like to collaborate dont hesitate to hit me up! 
              </p>
            </div>
          </Col>
          <Col xs={12} md={6}>
            <div className="about-me-photo-container">
              <div className="about-me-photo">
                <img src={myPhoto} alt="My Photo" />
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
