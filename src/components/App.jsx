import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Aside from './Aside/Aside';
import Searchbar from './Searchbar/Searchbar';
import SpinnerLoad from './SpinnerLoad/SpinnerLoad';
import { yelpApiUrl, perPage } from '../constants';
import quickSortByRating from '../functions/quickSort';
import styles from './App.module.css';
import Card from './Card/Card';
import Pagination from './Pagination/Pagination';
import ErrorRequest from './ErrorRequest/ErrorRequest';

function App() {
    const [parkings, setParkings] = useState([]);
    const [location, setLocation] = useState('argentina');
    const [loading, setLoading] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [errorRequest, setErrorRequest] = useState(false);

    const getParkings = async () => {
        setLoading(true);
        try {
            const data = await axios.get(yelpApiUrl, {
                headers: {
                    Authorization: `Bearer ${process.env.REACT_APP_APIKEY}`,
                },
                params: {
                    categories: 'parking',
                    sort_by: 'rating',
                    location,
                },
            });
            const sortedParkings = quickSortByRating(data.data.businesses);
            setParkings(sortedParkings);
            setLoading(false);
        } catch (error) {
            setLoading(false);
            error.toString().includes('429')
                ? setErrorRequest(true)
                : setErrorRequest(false);
            setParkings([]);
        }
    };

    useEffect(() => {
        getParkings();
        //eslint-disable-next-line
    }, [location]);

    // This part of code is for pagination

    const indexOfLastParking = currentPage * perPage;
    const indexOfFirstParking = indexOfLastParking - perPage;
    const currentParkings = parkings.slice(
        indexOfFirstParking,
        indexOfLastParking
    );

    return (
        <div className={styles.container}>
            <Searchbar
                setLocation={setLocation}
                setCurrentPage={setCurrentPage}
            />
            {(loading && <SpinnerLoad />) || (errorRequest && <ErrorRequest />)}
            <header className={styles.header}>
                <h2>
                    {`${parkings.length} results found for `}
                    <span className={styles.locationName}>{location}</span>
                </h2>
            </header>
            <main className={styles.mainContent}>
                <Aside parkings={parkings} />
                <section className={styles.cardsContainer}>
                    <ul className={styles.headerCards}>
                        <li></li>
                        <li>Name</li>
                        <li>Location</li>
                        <li>Phone Number</li>
                        <li>Reviews</li>
                        <li>Score</li>
                        <li>Calification</li>
                    </ul>
                    {currentParkings.map((el, idx) => (
                        <Card parking={el} key={`parking_lot-${idx}`} />
                    ))}
                </section>
            </main>
            <Pagination
                parkings={parkings}
                currentPage={currentPage}
                setCurrentPage={setCurrentPage}
            />
        </div>
    );
}

export default App;
