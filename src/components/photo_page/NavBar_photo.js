import React, { useState, useEffect } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import navIcon1 from '../../assets/img/nav-icon1.svg';
import navIcon3 from '../../assets/img/nav-icon3.svg';
import { HashLink } from 'react-router-hash-link';
import { Link } from "react-router-dom";

export const NavBar_photo = ({ onTagClick }) => {
  const [activeLink, setActiveLink] = useState(null);
  const [scrolled, setScrolled] = useState(false);


  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    }

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, [])
  
  const handleLinkClick = (value) => {
    // If the clicked link is already the active link, pass null to onTagClick
    const newActiveLink = activeLink === value ? null : value;

    // Toggle the active link
    setActiveLink(newActiveLink);

    // Call the onTagClick function with the newActiveLink value
    if (onTagClick) {
      onTagClick(newActiveLink);
    }
  }

  const handleRefresh = () => {
    // Reload the entire application
    window.location.href = '/';
  };

  return (
    <Navbar expand="md" className={scrolled ? "scrolled navbar-photo" : "navbar-photo"}>
      <Container>
        <Link to="/" style={{ textDecoration: 'none', cursor: 'pointer' }}>
          <Navbar.Brand style={{ color: 'white', fontWeight: 'bold' }} onClick={handleRefresh}>
            Gorini Mattia
          </Navbar.Brand>
        </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav">
          <span className="navbar-toggler-icon"></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link
              as={HashLink}
              smooth
              to="#photo-gallery"
              className={`navbar-link ${activeLink === 'street' ? 'active' : ''}`}
              onClick={() => handleLinkClick('street')}
            >
              Street
            </Nav.Link>

            <Nav.Link
              as={HashLink}
              smooth
              to="#photo-gallery"
              className={`navbar-link ${activeLink === 'travel' ? 'active' : ''}`}
              onClick={() => handleLinkClick('travel')}
            >
              Travel
            </Nav.Link>

            <Nav.Link
              as={HashLink}
              smooth
              to="#photo-gallery"
              className={`navbar-link ${activeLink === 'black&white' ? 'active' : ''}`}
              onClick={() => handleLinkClick('black&white')}
            >
              Black&White
            </Nav.Link>
          </Nav>
          <span className="navbar-text">
            <div className="social-icon">
              <a href="https://www.linkedin.com/in/mattia-gorini-6953a01a2"><img src={navIcon1} alt="" /></a>
              <a href="https://www.instagram.com/aroundwithmatthew"><img src={navIcon3} alt="" /></a>
            </div>
          </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
