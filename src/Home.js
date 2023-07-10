import React from 'react';
import './Home.css';  // assuming you have a CSS file to style your components
import headshot from './assets/jordan-safer-headshot.png';

const Home = () => {
    return (
      <div className="container">
        <div className="sidebar">
          <h2>Jordan Safer</h2>
          <img src={headshot} alt="Jordan Safer" />
          <p>
            <a href="https://github.com/jordansafer">
                <i className="fab fa-github"></i> GitHub
            </a>
            </p>
            <p>
            <a href="https://twitter.com/jordan-safer">
                <i className="fab fa-twitter"></i> Twitter
            </a>
            </p>
            <p>
            <a href="https://orcid.org/your-orcid-id">
                <i className="ai ai-orcid"></i> ORCID
            </a>
        </p>
        </div>
        <div className="mainContent">
          <h1>Welcome to my website</h1>
          <p>
            My research interests include aging, cell simulation,
            protein kinematics, and protein bioinformatics.
          </p>
        </div>
      </div>
    );
  };
  
  export default Home;
  