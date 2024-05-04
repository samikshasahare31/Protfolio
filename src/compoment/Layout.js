import React from 'react'
import { Outlet, Link } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


const Layout = () => {
  return (

    <div>
    {/* <Navbar bg="dark" data-bs-theme="dark">
    <Nav className="me-auto">
    <Container>
        <Nav className="me-auto">
        <Nav.Link>
          <Link to="/">Home</Link>
        </Nav.Link>
        <Nav.Link>
          <Link to="/skill">Skill</Link>
        </Nav.Link>
        <Nav.Link>
          <Link to="/project">Project</Link>
        </Nav.Link>
        <Nav.Link>
          <Link to="/about">About</Link>
        </Nav.Link>
        <Nav.Link>
          <Link to="/contact">Contact</Link>
        </Nav.Link>
      </Nav>
      </Container>
    </Nav>
    </Navbar> */}
    <Outlet />

  </div>
  )
}

export default Layout;
