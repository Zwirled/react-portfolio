import React from 'react';
import { NavLink } from 'react-router-dom';

function Header() {
    const pages = [
        { name: 'Home', path: '/', end: true },
        { name: 'About', path: '/about' },
        { name: 'Projects', path: '/projects' },
        { name: 'Contact', path: '/contact' },
    ];

    return (
        <header>
            <div class="logo">
                <img src="#" alt="Amelia Bramwell Logo" />
            </div>
            <nav>
                <ul className="nav nav-tabs">
                    {pages.map((page) => (
                        <li className="nav-item" key={page.path}>
                            <NavLink
                                to={page.path}
                                end={page.end}
                                className={({ isActive }) =>
                                    isActive ? 'nav-link active' : 'nav-link'
                                }
                            >
                                {page.name}
                            </NavLink>
                        </li>
                    ))}
                </ul>
            </nav>
        </header>
    );
}

export default Header;