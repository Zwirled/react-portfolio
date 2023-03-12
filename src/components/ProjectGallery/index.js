import React from 'react';
import projectData from '../../projectData.json';
import Project from '../Project';
import './style.css';

function ProjectGallery() {
    return (
        <div className="project-gallery">
            {projectData.slice().reverse().map(project => (
                <Project
                    key={project.title}
                    data={project}
                />
            ))}
        </div>
    );
}

export default ProjectGallery;