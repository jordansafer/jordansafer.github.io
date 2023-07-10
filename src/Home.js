import React from 'react';
import './Home.css';  // assuming you have a CSS file to style your components
import headshot from './assets/jordan-safer-headshot.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faTwitter } from '@fortawesome/free-brands-svg-icons';
import orcidIcon from './assets/ORCID_iD.svg';

// In your component render method:


const Home = () => {
    return (
      <div className="container">
        <div className="sidebar">
          <h2>Jordan Safer</h2>
          <img src={headshot} alt="Jordan Safer" />
          <p>
          <a href="https://github.com/jordansafer">
            <FontAwesomeIcon icon={faGithub} className="icon" />GitHub
            </a>
            </p>
            <p>
            <a href="https://twitter.com/jordan-safer">
            <FontAwesomeIcon icon={faTwitter} className="icon" />Twitter
            </a>
            </p>
            <p>
            <a href="https://orcid.org/your-orcid-id">
            <img src={orcidIcon} alt="ORCID" className="icon" />ORCID
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
  