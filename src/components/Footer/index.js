import React from 'react';

function Footer() {
    const socials = [
        { name: 'Twitter', url: 'https://twitter.com/zwirled/' },
        { name: 'Instagram', url: 'https://www.instagram.com/zwirled/' },
        { name: 'LinkedIn', url: 'https://www.linkedin.com/in/zwirled/' },
        { name: 'GitHub', url: 'https://github.com/Zwirled/' },
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