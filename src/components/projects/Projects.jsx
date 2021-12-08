import React from 'react'
import ProjectCard from '../projectsCard/ProjectCard';
import './projects.scss'
import {projects} from './projects.js'
const Projects = () => {
    return (
      <div id="projects" className="projects">
        <span className="projects__title-container">
          <span className="projects__title">Yeah, I work hard </span>💼
        </span>
        <p className="projects__description">
          Each project is unique. Here are some of my works.
        </p>
        <div className="projects__projectCard-container">
          {projects.map((project) => (
            <ProjectCard key={project.ID} project={project} />
          ))}
        </div>
      </div>
    );
}

export default Projects
