import React from 'react';
import projectData from '../../projectData.json';
import './style.css';

function Project(props) {
    const { title, deployedLink, githubLink, image } = props.data;

    return (
        <div className="project">
            <h3>{title}</h3>
            <img src={image} alt={title} />
            <p><a href={deployedLink} target="_blank" rel="noopener noreferrer">Link to Deployed Version</a></p>
            <p><a href={githubLink} target="_blank" rel="noopener noreferrer">Link to GitHub Repository</a></p>
        </div>
    );
}

export default Project;