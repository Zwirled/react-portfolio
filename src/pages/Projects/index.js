import React from "react";
import ProjectGallery from "../../components/ProjectGallery"
import './style.css';

function Projects() {
    return (
        <main>
            <section class="projects">
                <div class="row">
                    <div class="col">
                        <h1>Recent projects</h1>
                    </div>
                </div>
                <div class="row">
                    <div class="col">
                        <ProjectGallery />
                    </div>
                </div>
            </section>
        </main>
    );
}

export default Projects;