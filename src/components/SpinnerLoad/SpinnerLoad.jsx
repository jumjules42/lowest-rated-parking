import React from 'react';
import styles from './SpinnerLoad.module.css';

function SpinnerLoad() {
    return (
        <div className={styles.spinnerContainer}>
            <div className={styles['lds-circle']}>
                <div></div>
            </div>
        </div>
    );
}

export default SpinnerLoad;
