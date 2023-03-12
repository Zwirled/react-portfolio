import React from "react";
import ContactForm from '../../components/ContactForm';
import './style.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faInstagram, faLinkedinIn, faGithub } from "@fortawesome/free-brands-svg-icons";

function Contact() {
    const socials = [
        { name: 'Twitter', url: 'https://twitter.com/zwirled/', icon: faTwitter },
        { name: 'Instagram', url: 'https://www.instagram.com/zwirled/', icon: faInstagram },
        { name: 'LinkedIn', url: 'https://www.linkedin.com/in/zwirled/', icon: faLinkedinIn },
        { name: 'GitHub', url: 'https://github.com/Zwirled/', icon: faGithub },
    ];

    return (
        <main>
            <section class="contact">
                <div class="row">
                    <div class="col">
                        <h1>Contact</h1>
                        <p>If you would like to get in touch, please use the below contact details, or alternatively you can fill out the form and I will get back to you as soon as I can.</p>
                        <a href="mailto:bramwellamelia@gmail.com">bramwellamelia@gmail.com</a>
                        <ul className="socials">
                            {socials.map((link) => (
                                <li className="nav-item" key={link.url}>
                                    <a href={link.url} className="nav-link" target="_blank" rel="noopener noreferrer">
                                        <FontAwesomeIcon icon={link.icon} />
                                    </a>
                                </li>
                            ))}
                        </ul>
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