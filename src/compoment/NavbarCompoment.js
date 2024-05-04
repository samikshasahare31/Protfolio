import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Skill from './Skill';
import Project from './Project';
import About from './About';
import Contact from './Contact';
import Home from './Home';
import Layout from './Layout';

const NavbarCompoment = () => {
  return (
    <Navbar bg="dark" data-bs-theme="dark" >
    <Container style={{marginLeft:"0rem"}}>
      {/* <Navbar.Brand href="#home">Navbar</Navbar.Brand> */}
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="skill" element={<Skill />} />
          <Route path="project" element={<Project />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
        </Route>
      </Routes>
    </BrowserRouter>
    </Container>
  </Navbar>
  )
}

export default NavbarCompoment
