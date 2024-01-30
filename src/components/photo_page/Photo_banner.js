import React from 'react';
import { Container, Row, Col } from "react-bootstrap";
import { useNavigate } from 'react-router-dom';
import 'animate.css';

export const Photo_banner = () => {
  const navigate = useNavigate();

  return (
    <section className="banner-photo" id="photo-home">
      <Container>
        <Row className="align-items-center">
          <Col xs={12} md={6} xl={7}>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
