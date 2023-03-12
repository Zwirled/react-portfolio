import React from 'react';
import './style.css';

function Project(props) {
    const { title, deployedLink, githubLink, image } = props.data;

    return (
        <div className="project">
            <div class="image">
                <img src={process.env.PUBLIC_URL + image} alt={title} />
                <div class="content">
                    <h3>{title}</h3>
                    <div class="links">
                        <a href={deployedLink} target="_blank" rel="noopener noreferrer">Live</a>
                        <a href={githubLink} target="_blank" rel="noopener noreferrer">Repo</a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Project;