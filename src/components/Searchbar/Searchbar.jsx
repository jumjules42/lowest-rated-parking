import React, { useState } from 'react';
import styles from './Searchbar.module.css';

function Searchbar({ setLocation, setCurrentPage }) {
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
            setCurrentPage(1);
            return setLocation(input);
        }
        return setError(true);
    };

    const handleClose = () => {
        setError(false);
    };

    return (
        <nav className={styles.navbar}>
            <span className={styles.titleApp}>
                <i className='uil uil-parking-circle'></i>
                Lowest Rated Parking Lots
            </span>
            <form className={styles.searchbar} onSubmit={handleSearch}>
                <input
                    className={styles.inputSearch}
                    type='text'
                    placeholder='Location...'
                    onChange={handleChange}
                    value={input}
                />
                <input
                    className={styles.buttonSearch}
                    type='submit'
                    value='Search'
                />
                {error && (
                    <div className={styles.error}>
                        <p>The search input must have more than 3 characters</p>
                        <i
                            onClick={handleClose}
                            className='uil uil-multiply'
                        ></i>
                    </div>
                )}
            </form>
            <q>Made by Julian Vazquez</q>
        </nav>
    );
}

export default Searchbar;
