import React from "react";
import ProjectGallery from "../../components/ProjectGallery"

function Projects() {
    return (
        <main>
            <section class="projects">
                <div class="row">
                    <div class="col">
                        <h1>Recent projects</h1>
                    </div>
                </div>
            </section>
            <section>
                <ProjectGallery />
            </section>
        </main>
    );
}

export default Projects;