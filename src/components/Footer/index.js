import React from 'react';
import Style from './style.css';

function Footer() {
    const socials = [
        { name: 'Twitter', url: 'https://twitter.com/zwirled/', icon: 'x' },
        { name: 'Instagram', url: 'https://www.instagram.com/zwirled/', icon: 'x' },
        { name: 'LinkedIn', url: 'https://www.linkedin.com/in/zwirled/', icon: 'x' },
        { name: 'GitHub', url: 'https://github.com/Zwirled/', icon: 'x' },
    ];

    return (
        <footer>
            <nav>
                <ul className="socials">
                    {socials.map((link) => (
                        <li className="nav-item" key={link.url}>
                            <a href={link.url} className="nav-link" target="_blank" rel="noopener noreferrer">
                                {link.name}
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