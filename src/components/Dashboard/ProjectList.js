// src/components/Dashboard/ProjectList.js
import React from 'react';

const ProjectList = ({ projects }) => {
  return (
    <div>
      <h2>Projects</h2>
      <ul>
        {projects.map((project) => (
          <li key={project.id}>
            <h3>{project.name}</h3>
            <p>{project.description}</p>
            <p>Status: {project.status}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProjectList;
