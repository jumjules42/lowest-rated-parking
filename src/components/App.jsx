import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Aside from './Aside/Aside';
import Searchbar from './Searchbar/Searchbar';
import SpinnerLoad from './SpinnerLoad/SpinnerLoad';
import { yelpApiUrl } from '../constants';
import styles from './App.module.css';
import Card from './Card/Card';
import Navbar from './Navbar/Navbar';

function App() {
    const [parkings, setParkings] = useState([]);
    const [location, setLocation] = useState('argentina');
    const [loading, setLoading] = useState(false);

    const getParkings = async () => {
        setLoading(true);
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
        setParkings(data.data.businesses);
        setLoading(false);
    };

    console.log(parkings);

    useEffect(() => {
        getParkings();
        //eslint-disable-next-line
    }, [location]);

    if (loading) return <SpinnerLoad />;

    return (
        <div className={styles.container}>
            <Navbar />
            <Searchbar setLocation={setLocation} />
            <header>
                <h2>{`${parkings.length} results found for ${location}`}</h2>
            </header>
            <main>
                <Aside />
                <section>
                    {parkings.map((el, idx) => (
                        <Card parking={el} key={`parking_lot-${idx}`} />
                    ))}
                </section>
            </main>
        </div>
    );
}

export default App;
