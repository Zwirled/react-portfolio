import React from 'react';
import { NavLink } from 'react-router-dom';
import './style.css';
import logo from '../../assets/images/logo.svg'

function Header() {
    const pages = [
        { name: 'About', path: '/about' },
        { name: 'Projects', path: '/projects' },
        { name: 'Contact', path: '/contact' },
    ];

    return (
        <header>
            <div class="container">
                <div class="row">
                    <div class="logo">
                        <a href="/"><img src={logo} alt="Amelia Bramwell Logo"></img></a>
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
                </div>
            </div>
        </header>
    );
}

export default Header;