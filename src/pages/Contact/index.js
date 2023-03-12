import React from "react";
import ContactForm from '../../components/ContactForm';

function Contact() {
    return (
        <main>
            <section class="about">
                <div class="row">
                    <div class="col">
                        <h1>Contact</h1>
                        <p>
                        </p>
                    </div>
                    <div class="col">
                        <div class="form">
                            <ContactForm />
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}

export default Contact;