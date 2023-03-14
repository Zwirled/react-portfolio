import React from "react";
import ProjectGallery from "../../components/ProjectGallery";
import CallToAction from "../../components/CallToAction";
import './style.css';

function Projects() {
    return (
        <main>
            <section className="projects">
                <div className="row">
                    <div className="col">
                        <h1>Recent projects</h1>
                    </div>
                </div>
                <div className="row">
                    <ProjectGallery />
                </div>
            </section>
            <CallToAction />
        </main>
    );
}

export default Projects;