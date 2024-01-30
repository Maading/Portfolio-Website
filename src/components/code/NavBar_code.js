import { useState, useEffect } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import navIcon1 from '../../assets/img/nav-icon1.svg';
import navIcon3 from '../../assets/img/nav-icon3.svg';
import {
  Link
} from "react-router-dom";

export const NavBar_code = () => {

  const [activeLink, setActiveLink] = useState('home');
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

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  };

  const handleRefresh = () => {
    // Reload the entire application
    window.location.href = '/';
  };

  return (
    <Navbar expand="md" className={scrolled ? "scrolled navbar-code" : "navbar-code"}>
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
            <Link to="/code/consuela" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('home')}>Consuela</Link>
            <Link to="/code/website" className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('projects')}>Website</Link>
            <Link to="/code/projects" className={activeLink === 'aboutme' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('aboutme')}>Other</Link>
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
  )
}
