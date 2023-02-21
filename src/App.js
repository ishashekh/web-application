import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { Navbar, Nav } from 'react-bootstrap';
import Home from './components/Home';
import About from './components/About';
import Services from './components/Services';
import Tools from './components/Tools';


function App() {
  return (
    <BrowserRouter>
      <Navbar bg="light" expand="lg">
        <Navbar.Brand as={Link} to="/">Web Application</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <Nav.Link as={Link} to="/about">About</Nav.Link>
            <Nav.Link as={Link} to="/services">Services</Nav.Link>
            <Nav.Link as={Link} to="/tools">Tools</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>


      <Routes>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="services" element={<Services />} />
        <Route path="tools" element={<Tools />} />
      </Routes>
    </BrowserRouter>

  );
}

export default App;