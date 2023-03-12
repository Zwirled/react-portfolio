import React from "react";
import ProjectGallery from "../../components/ProjectGallery";
import CallToAction from "../../components/CallToAction";
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
                    <ProjectGallery />
                </div>
            </section>
            <CallToAction />
        </main>
    );
}

export default Projects;