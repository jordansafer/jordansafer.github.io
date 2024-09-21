import React from 'react';
import './Home.css';  // assuming you have a CSS file to style your components
import headshot from './assets/jordan-safer-headshot.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faTwitter, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faFileDownload } from '@fortawesome/free-solid-svg-icons';

import orcidIcon from './assets/ORCID_iD.svg';
import cv from './assets/JordanSaferResume07142023.pdf';

// In your component render method:


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
                I am a Computational Associate in the Iqbal lab, a part of the Ladders2Cures Accelerator
                at the <a href="https://www.broadinstitute.org/" target="_blank" rel="noopener noreferrer">Broad Institute of MIT and Harvard</a>. 
            </p>
            <p>
                
            </p>
            <p> 
                As a computational researcher, my goal is to create tools that allow us to systematically understand and treat disease. To that end,
                see my current work on <a href="https://g2p.broadinstitute.org/" target="_blank" rel="noopener noreferrer">Genomics to Proteins Portal (G2P)
                </a>. I currently work on tooling around protein struture and function, especially around genetic variation. I'm also very excited about
                protein kinetics 🙂.
            </p>
        <h2>Research Interests and motivation</h2>   
            <p>
                <strong>A quick summary:</strong> My current focus is on building <strong>computational tools</strong> to study 
                the influence of <strong>protein sequence</strong>, <strong>protein structure</strong>, and <strong>genetic variants</strong> to 
                understand and predict <strong>protein behaviors</strong> including <strong>disease mechanisms</strong>, <strong>therapeutic 
                targets</strong>, and <strong>protein kinetics</strong>.
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
                our bodies and everything inside them. Neuroscience aside.
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
            <p>
                Towards the first objective, my focus is on learning everything about cellular modeling, from the ground 
                up. I’m currently working at the intersection of <strong>genomics</strong> and <strong>protein structure</strong>, 
                with an emphasis on <strong>computational tools</strong> for predicting protein activity both broadly and in 
                the context of disease.
            </p>
        </div>
      </div>
        </>
    );
  };
  
  export default Home;
  