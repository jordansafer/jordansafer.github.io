import React from 'react';
import './Home.css';  // assuming you have a CSS file to style your components
import headshot from './assets/jordan-safer-headshot.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faTwitter, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faFileDownload } from '@fortawesome/free-solid-svg-icons';

import orcidIcon from './assets/ORCID_iD.svg';
import cv from './assets/JordanSaferResume20251212.pdf';



const Home = () => {
    return (
        <>
        <h1 className='page-heading'>Jordan Safer</h1>
      <div className="container">
        <div className="sidebar">
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
                <a href="https://www.linkedin.com/in/jordan-safer/">
                    <FontAwesomeIcon icon={faLinkedin} className="icon" />LinkedIn
                </a>
            </p>
            <p>
                <a href="mailto:jsafer@alumni.cmu.edu">
                    <FontAwesomeIcon icon={faEnvelope} className="icon" />Email
                </a>
            </p>
            <p>
                <a href="https://orcid.org/0009-0008-6007-7591">
                    <img src={orcidIcon} alt="ORCID" className="icon" />ORCID
                </a>
            </p>
            <p>
                <a href={cv} download>
                    <FontAwesomeIcon icon={faFileDownload} className="icon" />Download CV
                </a>
            </p>
        </div>
        <div className="mainContent">
          <h2>About</h2>
            <p>
                I am a Computer Science PhD student in the <a href="https://kishony.technion.ac.il/" target="_blank" rel="noopener noreferrer">Kishony Lab</a> at 
                the <a href="https://www.technion.ac.il/en" target="_blank" rel="noopener noreferrer">Technion - Israel Institute of Technology</a>.
            </p>
            <p>
                As a computational researcher, my goal is to create tools that allow us to systematically understand and treat disease and develop biotechnologies. To that end,
                I am currently working on methods to leverage Large Language Models (LLMs) and machine learning approaches to accelerate biological research.
                Previously, I worked on <a href="https://g2p.broadinstitute.org/" target="_blank" rel="noopener noreferrer">Genomics to Proteins Portal (G2P)</a>, 
                and other computational projects focused on protein structure and function. I'm also very excited about
                protein kinetics 🙂.
            </p>
        <h2>Research Interests and motivation</h2>   
            <p>
                <strong>A quick summary:</strong> My current focus is on building <strong>computational tools</strong> to study 
                genomic, biomolecular, and biochemical systems.
            </p>
            <p>
                <strong>What:</strong> Research computational techniques to <em>systematically</em> reduce the rate of disease. 
                Work towards giving more people the choice to keep living.
            </p>
            <p>
                <strong>Why:</strong> Many of us have lost someone close to heart too soon, and there’s an inevitability to it. Sometimes, 
                things go wrong. One approach to this is to pick a specific disease, disorder, virus, etc and work 
                to understand it and treat it. And many wonderful researchers are taking the fight to cancers, 
                developmental disorders, and so many other conditions this way. Which brings us to an alternative 
                approach. There are thousands of diseases, and as we age the rate of disease grows at an exponential 
                rate <a href="https://pubmed.ncbi.nlm.nih.gov/22975005/" target="_blank" rel="noopener noreferrer">[Niccoli & Partridge, 2012]</a>. 
                With all the technology we have available, I want to speed up the systems we use, and build newer and 
                better ones for understanding and treating diseases. And ultimately, I want to bring this work to the 
                mechanisms of aging that drive the high rates of disease as we age.
            </p>
            <p>
                <strong>How:</strong> As a computational researcher with a computational background, I see 2 high level challenges to modeling 
                our bodies and everything inside them.
            </p>
            <ol>
                <li>
                High fidelity simulation and modeling of individual cells, to the point where we can predict inputs and 
                outputs and behaviors for cell types across our bodies.
                </li>
                <li>
                System level simulation and modeling of multi cellular systems, ranging from tissues to organs to full 
                organisms.
                </li>
            </ol>
        </div>
      </div>
        </>
    );
  };
  
  export default Home;
  