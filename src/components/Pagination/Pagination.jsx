import React from 'react';
import { perPage } from '../../constants';
import styles from './Pagination.module.css';

function Pagination({ parkings, currentPage, setCurrentPage }) {
    const pageNumber = [];

    for (let i = 1; i <= Math.ceil(parkings.length / perPage); i++) {
        pageNumber.push(i);
    }

    const paginate = (number) => {
        setCurrentPage(number);
        window.scrollTo(0, 0);
    };

    return (
        <nav className={styles.pagination}>
            <ul className={styles.pagination__ul}>
                {pageNumber.map((el, idx) => (
                    <div
                        className={
                            currentPage === el ? styles.activePage : styles.page
                        }
                        onClick={() => paginate(el)}
                        key={`page-${idx}`}
                    >
                        <li>{el}</li>
                    </div>
                ))}
            </ul>
        </nav>
    );
}

export default Pagination;
