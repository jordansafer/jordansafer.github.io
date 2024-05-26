

import React, { useState } from 'react';
import { HashRouter as Router, Route, Routes, Link } from 'react-router-dom';

import './App.css';
import Home from './Home';
import Projects from './Projects';
import Experience from './Experience';
import Research from './Research';

// Future sections:
// Home: my picture and a little about me
// Publications: (in the future if i have these)
// Research: (maybe projects for now?)
// Academics: Degrees and all Academic awards, tech skills?
// CV: PDF CV
// Contact: just email? not phone or address probably. maybe linkedin

// 404 page
const NoMatch = () => (
  <div>
    <h1>404</h1>
    <p>Page not found</p>
  </div>
);

const App = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Router>
      <div>
        <nav className='navBar'>
          <button onClick={toggleMenu} className="hamburger">&#9776;</button>
          <div className={isOpen ? "nav-links active" : "nav-links"}>
            <Link to="/" className="navButton">Home</Link>
            <Link to="/projects" className="navButton">Projects</Link>
            <Link to="/experience" className="navButton">Experience</Link>
            <Link to="/research" className="navButton">Research</Link>
          </div>
        </nav>
        <div className="sitePage">
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/experience" element={<Experience />} />
            <Route path="/research" element={<Research />} />
            <Route path="*" element={<NoMatch />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;


