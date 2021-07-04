import React, { useState } from 'react';
import styles from './Searchbar.module.css';

function Searchbar({ setLocation }) {
    const [input, setInput] = useState('');
    const [error, setError] = useState(false);

    const handleChange = (e) => {
        const value = e.target.value;
        setInput(value);
    };

    const handleSearch = (e) => {
        e.preventDefault();
        if (input.length >= 3) {
            setError(false);
            setInput('');
            return setLocation(input);
        }
        return setError(true);
    };

    return (
        <form onSubmit={handleSearch}>
            <input
                type='text'
                placeholder='Location...'
                onChange={handleChange}
                value={input}
            />
            <input type='submit' value='Search' />
            {error && (
                <p className={styles.error}>
                    The search input must have more than three characters
                </p>
            )}
        </form>
    );
}

export default Searchbar;
