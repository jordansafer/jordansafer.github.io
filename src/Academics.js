import React from 'react';

const link491 = "https://course.ece.cmu.edu/~ece491/";
const link150 = 'https://www.cs.cmu.edu/~15150/index.html';

const Academics = () => (
  <div>
    <h1>Academics</h1>
    <section>
      <h2>Education</h2>
      <div className="education-section">
        <h3>Master of Science in Electrical and Computer Engineering</h3>
        <p>Carnegie Mellon University, Pittsburgh, PA</p>
        <p>September 2017 - May 2018</p>
        <ul>
          <li>Coursework focused on signal processing and neuroscience.</li>
          <li>Teaching Assistant for Digital Signal Processing (18-491).</li>
        </ul>

        <h3>Bachelor of Science in Electrical and Computer Engineering</h3>
        <p>Carnegie Mellon University, Pittsburgh, PA</p>
        <p>September 2014 - May 2017</p>
        <ul>
          <li>Coursework in advanced algorithm design, embedded systems, advanced digital logic design.</li>
          <li>Worked 3 semesters as a Teaching Assistant for Functional Programming (15-150).</li>
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

export default Academics;
