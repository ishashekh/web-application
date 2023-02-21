// src/components/Services.js
import React from 'react';

function Services() {
    return (
        <div className='home-container'>
            <h1>Our Services</h1>
            <p>We offer a wide range of services to meet your needs.</p>
            <ul className='list-left'>
                <li>Notes</li>
                <li>Weather</li>
                <li>Calculator</li>
                <li>Checklist</li>
                <li>Newsfeed</li>
            </ul>
        </div>
    );
}

export default Services;