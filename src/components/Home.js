// src/components/Home.js
import React from 'react';
import './Home.css';
import { useState } from 'react';

function Home() {
    const [count, setCount] = useState(0);

    const handleIncrement = () => {
        setCount(count + 1);
    }
    return (
        <div className="home-container">
            <h1>Welcome to the Home page!</h1>
            <p>You've clicked the button {count} times.</p>
            <button onClick={handleIncrement}>Click me!</button>
        </div>
    );
}

export default Home;