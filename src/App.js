import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from './compoment/Layout';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Home from './compoment/Home';
import Skills from './compoment/Skills';
import About from './compoment/About';
import Sidebar from './compoment/Sidebar';
import Projects from './compoment/Project';
import { Contact } from './compoment/Contact';


function App() {
  return (
    <>
        <BrowserRouter>
    {/* <Sidebar> */}

            <Routes>
              <Route path="/" element={<Layout />}>
                <Route index element={<Home />} />
                <Route path="skills" element={<Skills />} />
                <Route path="projects" element={<Projects />} />
                <Route path="about" element={<About />} />
                <Route path="contact" element={<Contact />} />
                <Route path="*" element={<Home />} />
              </Route>
            </Routes>
            {/* </Sidebar> */}
          </BrowserRouter>
    </>
  );
}

export default App;
