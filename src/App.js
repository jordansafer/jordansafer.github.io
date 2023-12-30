

import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';

import './App.css';
import Home from './Home';
import Projects from './Projects';
import Academics from './Academics';

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
  return (
    <Router>
      <div>
        <nav className='navBar'>
          <Link to="/" className="navButton">Home</Link>
          <Link to="/projects" className="navButton">Projects</Link>
          <Link to="/academics" className="navButton">Academics</Link>
        </nav>
        <div className="sitePage">
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/academics" element={<Academics />} />
            <Route path="*" element={<NoMatch />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;


