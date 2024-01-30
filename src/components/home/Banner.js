import React from 'react';
import { Container, Row, Col } from "react-bootstrap";
import { ArrowRightCircle } from 'react-bootstrap-icons';
import { useNavigate } from 'react-router-dom';
import 'animate.css';

export const Banner = () => {
  const navigate = useNavigate();

  const handleCheckPhotos = () => {
    // Navigate to the "/photography" route
    navigate('/photography');
  };

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="align-items-center">
          <Col xs={12} md={6} xl={7}>
            <button onClick={handleCheckPhotos}>Check my Photos <ArrowRightCircle size={25} /></button>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
