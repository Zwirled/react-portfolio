import React from 'react';
import projectData from '../../projectData.json';
import Project from '../Project';
import './style.css';

function ProjectGallery() {
    return (
        <div class="gallery">
            <div class="card-container">
                {projectData.slice().reverse().map(project => (
                    <Project
                        key={project.title}
                        data={project}
                    />
                ))}
            </div>
        </div>
    );
}

export default ProjectGallery;