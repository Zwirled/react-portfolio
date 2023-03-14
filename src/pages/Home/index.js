import React from "react";
import { NavLink } from 'react-router-dom';
import CallToAction from "../../components/CallToAction"
import './style.css';
import headShot from '../../assets/images/headshot.webp';

function Home() {
    const projects = [
        { name: 'Projects', path: '/projects' },
    ];
    return (
        <main>
            <section className="introduction">
                <div className="row">
                    <div className="col">
                        <h1>Hello, I'm Amelia Bramwell.</h1>
                        <p>
                            I'm a graphic designer & front-end website developer based in the North West, specialising in user-friendly, concept-driven designs for all platforms.
                        </p>
                        <NavLink to={projects[0].path}>
                            View projects
                        </NavLink>
                    </div>
                    <div className="col">
                        <div className="headshot">
                            <img src={headShot} alt="Head Shot of Amelia Bramwell"></img>
                        </div>
                    </div>

                </div>
            </section>
            <CallToAction />
        </main>
    );
}

export default Home;
