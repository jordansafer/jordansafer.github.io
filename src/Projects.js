
import React from 'react';
import './Projects.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

const Projects = () => {
    const projects = [
      {
        name: 'Genomics 2 Proteins Portal',
        date: 'April 2023 - Present',
        description: [
          "G2P is a portal that takes on the challenge of integrating the ever \
          growing amount of variant data with protein data on the sequence and structure. \
          In my work on G2P, I've focused on bringing in new data sources, \
          making it possible to map all types of functional and structural features to protein structures, \
          and optimizing the user experience. I've been thrilled to roll out AlphaFold2 structure features, \
          including DSSP secondary structures, MAVEs (Multiplexed Assays of Variant Effect) from MAVEdb, \
          and sequence to structure mapping for these and other features. Stay tuned for more!",
        ],
        url: 'https://g2p.broadinstitute.org/',
      }, // TODO a picture of g2p or the pfv or structure mapping
      {
        name: 'Terra Platform',
        date: 'October 2021 - March 2023',
        description: [
            "Terra is a cloud-native platform for biomedical researchers and institutions to access data, run analysis tools, \
            and collaborate. My team had the exciting responsibility of managing the data store for tracking \
            all of the data that users upload to Terra! My work centered on 2 projects: \
            1) Supporting a new data integration with the Terra Data Repository, a new data store for \
            storing large datasets in a highly scalable platform that caters to analysis with tools like Google BigQuery. \
            2) As part of the Terra on Azure project and collaboration with the Microsoft team, \
            I worked to complete a new Landing Zone model which defines organizational resources. \
            I worked to integrate the new model with the new process for creating resources at an organization level, \
            and integrated that with our services.",
        ],
        githubLink: 'https://www.github.com/broadinstitute/import-service',
        url: 'https://terra.bio/',
      }, // TODO a picture or terra
      {
        name: 'Amazon Robotics',
        date: 'July 2018 - September 2021',
        description: [

        ],
        url: 'https://www.amazonrobotics.com/#/',
        // TODO image of a pod and maybe a tote rack
      }
      // ...other projects: Hooks Lab neuroscience, Fall detector, compiler, superscalar pipeline, pacrunner, determinator
    ];
  
    const renderProject = (project) => (
      <div className='project'>
        <h2>{project.name}</h2>
        <h3>{project.date}</h3>
        {project.description.map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}
        {project.githubLink && (
            <>
                <a href={project.githubLink}>
                    <FontAwesomeIcon icon={faGithub} className="icon" />&nbsp;GitHub
                </a>&nbsp;&nbsp;
                </>

        )}
        {project.url && (

                <a href={project.url}>Website</a>
      
        )}
        {project.imageLink && (
          <img src={project.imageLink} alt={project.name} />
        )}
      </div>
    );
  
    return (
      <div>
        <h1>Selected Projects & Experiences</h1>
        {projects.map((project, index) => (
          <div key={index}>
            {renderProject(project)}
          </div>
        ))}
        <h2>Selected Past Projects</h2>
        <ul>
          <li>Hooks lab - mouse brain connectivity analysis</li>
          <li>Fall detector - Signal Processing capstone project</li>
          <li>C0 to x86 compiler</li>
          <li>Screeps AI: <a href="https://github.com/JonathanSafer/screeps">Code</a></li>
          <li>Superscalar pipeline - Digital logic architecture & implementation</li>
          <li><a href="https://github.com/jordansafer/determinator">Determinator</a> - Smart football</li>
          <li>Pacrunner - Infinite pacman: 
            <a href="https://github.com/jordansafer/pacrunnergame"> Code</a>
          </li>
        </ul>
      </div>
    );
};
  
export default Projects;