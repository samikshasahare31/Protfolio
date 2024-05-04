import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from './compoment/Layout';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Home from './compoment/Home';
import Skill from './compoment/Skill';
import About from './compoment/About';
import Sidebar from './compoment/Sidebar';
import Dashboard from './compoment/Dashboard';
import { Project } from './compoment/Project';
import { Contact } from './compoment/Contact';


function App() {
  return (
    <>
    <BrowserRouter>
    <Sidebar>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/home" element={<Home />} />
          <Route path="skill" element={<Skill />} />
          <Route path="/project" element={<Project />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
        <Route path="/dashboard" element={<Dashboard />}/>
        </Route>
      </Routes>
      </Sidebar>
    </BrowserRouter>
    </>

  );
}

export default App;
