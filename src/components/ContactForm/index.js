import React, { useState } from 'react';
import './style.css';

function ContactForm() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(`Name: ${name}\nEmail: ${email}\nMessage: ${message}`);
        // Send form data to backend or email
        // Reset form fields
        setName('');
        setEmail('');
        setMessage('');
    }

    return (
        <form onSubmit={handleSubmit}>
            <div class="input">
            <label htmlFor="name">Name:</label>
            <input
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                />
            </div>
            <div class="input">
            <label htmlFor="email">Email:</label>
            <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
            />
            </div>
            <div class="input">
            <label htmlFor="message">Message:</label>
            <textarea
                id="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
                ></textarea>
            </div>
            <button type="submit">Submit</button>
        </form>
    );
}

export default ContactForm;