import React from 'react';

const ProjectCard = ({ title, description, githubLink }) => {
  return (
    <div className="card1 mb-3 my-1">
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{description}</p>
        <a href={githubLink} target="_blank" rel="noopener noreferrer" className="btn btn-primary">GitHub</a>
      </div>
    </div>
  );
}

export default ProjectCard;
