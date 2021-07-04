import React from 'react';
import styles from './Navbar.module.css';

function Navbar() {
    return (
        <nav className={styles.navbar}>
            <i class='uil uil-parking-circle'></i>
            <h1>Lowest Rated Parking Lots</h1>
            <q>Made by Julian Vazquez</q>
        </nav>
    );
}

export default Navbar;
