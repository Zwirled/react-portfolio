import React from 'react';
import Style from './style.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { fab, faTwitter, faInstagram, faLinkedinIn, faGithub } from "@fortawesome/free-brands-svg-icons";


function Footer() {
    const socials = [
        { name: 'Twitter', url: 'https://twitter.com/zwirled/', icon: faTwitter },
        { name: 'Instagram', url: 'https://www.instagram.com/zwirled/', icon: faInstagram },
        { name: 'LinkedIn', url: 'https://www.linkedin.com/in/zwirled/', icon: faLinkedinIn },
        { name: 'GitHub', url: 'https://github.com/Zwirled/', icon: faGithub },
    ];

    return (
        <footer>
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
            <div class="copyright">
                <p>&copy; 2023. All Rights Reserved.</p>
            </div>
        </footer>
    );
}

export default Footer;