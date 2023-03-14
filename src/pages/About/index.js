import React from "react";
import './style.css';
import CallToAction from "../../components/CallToAction"

function About() {
    return (
        <main>
            <section className="about">
                <div className="row">
                    <div className="col">
                        <h1>About me</h1>
                        <p>
                            A skilled graphic designer and front-end
                            web developer with over 5 years of industry
                            experience, adept at creating user-friendly,
                            responsive, and accessible websites.
                            Known for a strong work ethic, attention to
                            detail, and effective communication and
                            problem-solving abilities. Proven track record
                            of delivering successful projects for clients
                            from small businesses to PLCs across various
                            industries such as technology, construction,
                            and non-profit organisations. Strong project
                            management and time management skills,
                            with the ability to work well under pressure,
                            and to take initiative and ownership of tasks.
                        </p>
                    </div>

                </div>
            </section>
            <CallToAction />
        </main>
    );
}

export default About;