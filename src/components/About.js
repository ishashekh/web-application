// src/components/About.js

import React, { useRef } from 'react';

function About() {
    const inputRef = useRef(null);

    const handleFocus = () => {
        inputRef.current.focus();
    }

    return (
        <div className='home-container'>
            <h1>About Page</h1>
            <input type="text" ref={inputRef} />
            <button onClick={handleFocus}>Focus input</button>
        </div>
    );
}

export default About;
