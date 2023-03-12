import React from 'react';
import { NavLink } from 'react-router-dom';
import './style.css';

function CallToAction() {
    const contact = [
        { name: 'Contact', path: '/contact' },
    ];
    return (
        <section class="call-to-action">
            <div class="row">
                <div class="col">
                    <h2>Want to find out more? Get in touch!</h2>
                </div>
                <div class="col">
                    <NavLink to={contact[0].path}>
                        Get in touch
                    </NavLink>
                </div>
            </div>
        </section>
    );
}

export default CallToAction;