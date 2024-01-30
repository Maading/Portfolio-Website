// Projects.jsx

import React from 'react';
import { Container, Row, Col, Tab, Nav } from 'react-bootstrap';
import { ProjectCard } from './ProjectCard';
import projImg1 from '../../assets/img/consuela.png';
import projImg2 from '../../assets/img/space_flight.png';
import projImg3 from '../../assets/img/spotify_icon.png';
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import { useNavigate } from 'react-router-dom';

export const Projects = () => {
  const navigate = useNavigate();

  const projects = [
    {
      title: 'Consuela',
      description: 'Android and IOS app - Check it out !',
      imgUrl: projImg1,
      route: 'code/consuela',
    },
    {
      title: 'Space Flight',
      description: 'Discover how long it takes to explore the solar system and beyond!',
      imgUrl: projImg2,
      route: 'code/website',

    },
    {
      title: 'Spotify API',
      description: 'Learn more about your Spotify music and use its data',
      imgUrl: projImg3,
      route: 'code/other',

    },
  ];

  const handleProjectClick = (route) => {
    navigate(route);
  };

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div>
                  <h2>Projects</h2>
                  <p>My personal projects and collaborations. App development, website design, and API integration.</p>
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                      <Nav.Item>
                        <Nav.Link eventKey="first">Coding</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="second">Travel</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="third">TBD</Nav.Link>
                      </Nav.Item>
                    </Nav>
                    <Tab.Content id="slideInUp">
                      <Tab.Pane eventKey="first">
                        <Row>
                          {projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                onClick={() => handleProjectClick(project.route)}
                              />
                            );
                          })}
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="second">
                        <p>My travel blog page, still a work in progress</p>
                      </Tab.Pane>
                      <Tab.Pane eventKey="third">
                        <p>Future projects, collaborations, and others.</p>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
