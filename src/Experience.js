import React from 'react';

import './Experience.css';

const link491 = "https://course.ece.cmu.edu/~ece491/";
const link150 = 'https://www.cs.cmu.edu/~15150/index.html';

const Experience = () => (
  <div className='academics-container'>
    <h1>Academics</h1>
    <section>
      <h2>Education</h2>
      <div>
        <h3>Master of Science in Electrical and Computer Engineering</h3>
        <p>Carnegie Mellon University, Pittsburgh, PA</p>
        <p>September 2017 - May 2018</p>
        <ul>
          <li>Coursework focused on signal processing and neuroscience.</li>
          <li>Teaching Assistant for <a href={link491}>Digital Signal Processing (18-491)</a>.</li>
        </ul>

        <h3>Bachelor of Science in Electrical and Computer Engineering</h3>
        <p>Carnegie Mellon University, Pittsburgh, PA</p>
        <p>September 2014 - May 2017</p>
        <ul>
          <li>Coursework in algorithm design, embedded systems, digital logic design.</li>
          <li>Worked 3 semesters as a Teaching Assistant for <a href={link150}>Functional Programming (15-150)</a>.</li>
        </ul>
      </div>
    </section>

    <section>
      <h2>Organizations and Leadership</h2>
      <ul>
        <li>Vice President of the Jewish Student Association.</li>
        <li>Finance Chair of the Student Activities Board’s Film group.</li>
      </ul>
    </section>
  </div>
);

export default Experience;
