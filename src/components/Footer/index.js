import React from 'react';
import './style.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faInstagram, faLinkedinIn, faGithub } from "@fortawesome/free-brands-svg-icons";
import cv from '../../assets/files/cv.pdf';


function Footer() {
    const socials = [
        { name: 'Twitter', url: 'https://twitter.com/zwirled/', icon: faTwitter },
        { name: 'Instagram', url: 'https://www.instagram.com/zwirled/', icon: faInstagram },
        { name: 'LinkedIn', url: 'https://www.linkedin.com/in/zwirled/', icon: faLinkedinIn },
        { name: 'GitHub', url: 'https://github.com/Zwirled/', icon: faGithub },
    ];

    return (
        <footer>
            <div className="container">
                <div className="row">
                    <div className="col">
                        <div className="cv">
                            <a href={cv} target="_blank">Download CV</a>
                        </div>
                        <nav>
                            <ul className="socials">
                                {socials.map((link) => (
                                    <li className="nav-item" key={link.url}>
                                        <a href={link.url} className="nav-link" target="_blank" rel="noopener noreferrer">
                                            <FontAwesomeIcon icon={link.icon} />
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </nav>
                    </div>
                    <div className="col">
                        <div className="copyright">
                            <p>&copy; 2023. All Rights Reserved.</p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;