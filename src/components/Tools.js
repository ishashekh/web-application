// src/components/Tools.js
import React, { useState, useEffect, useRef, useContext, useReducer } from 'react';

function Notes() {
    const [notes, setNotes] = useState([]);
    const inputRef = useRef(null);

    useEffect(() => {
        const savedNotes = JSON.parse(localStorage.getItem('notes') || '[]');
        setNotes(savedNotes);
    }, []);

    useEffect(() => {
        localStorage.setItem('notes', JSON.stringify(notes));
    }, [notes]);

    const handleAddNote = () => {
        const note = inputRef.current.value;
        setNotes([...notes, note]);
        inputRef.current.value = '';
    };

    const handleDeleteNote = (index) => {
        const newNotes = [...notes];
        newNotes.splice(index, 1);
        setNotes(newNotes);
    };

    return (
        <div>
            <h3>Notes</h3>
            <input type="text" ref={inputRef} />
            <button onClick={handleAddNote}>Add Note</button>
            <ul>
                {notes.map((note, index) => (
                    <li key={index}>
                        {note}
                        <button onClick={() => handleDeleteNote(index)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

function Checklist() {
    const [items, dispatch] = useReducer((state, action) => {
        switch (action.type) {
            case 'add':
                return [...state, action.payload];
            case 'delete':
                return state.filter((item, index) => index !== action.payload);
            default:
                return state;
        }
    }, []);

    const inputRef = useRef(null);

    const handleAddItem = () => {
        const item = inputRef.current.value;
        dispatch({ type: 'add', payload: item });
        inputRef.current.value = '';
    };

    const handleDeleteItem = (index) => {
        dispatch({ type: 'delete', payload: index });
    };

    return (
        <div>
            <h3>Checklist</h3>
            <input type="text" ref={inputRef} />
            <button onClick={handleAddItem}>Add Item</button>
            <ul>
                {items.map((item, index) => (
                    <li key={index}>
                        {item}
                        <button onClick={() => handleDeleteItem(index)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}



function Tools() {
    return (
        <div className='home-container bold'>
            <h1>Tools</h1>
            <Notes />
            <Checklist />

        </div>
    );
}

export default Tools;
