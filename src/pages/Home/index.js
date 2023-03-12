import React from "react";
import Style from "./style.css";
import headShot from '../../images/headshot.webp';

function Home() {
    return (
        <main>
            <section class="introduction">
                <div class="row">
                    <div class="col">
                        <h1>Hello, I'm Amelia Bramwell.</h1>
                        <p>
                            I'm a graphic designer & front-end website developer based in the North West, specialising in user-friendly, concept-driven designs for all platforms.
                        </p>
                    </div>
                    <div class="col">
                        <div class="headshot">
                            <img src={headShot} alt="Head Shot of Amelia Bramwell"></img>
                        </div>
                    </div>

                </div>
            </section>
        </main>
    );
}

export default Home;
