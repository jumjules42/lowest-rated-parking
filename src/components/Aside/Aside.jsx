import React, { useState, useEffect } from 'react';
import getRecommendation from '../../functions/getRecommendation';
import styles from './Aside.module.css';

function Aside({ parkings }) {
    const [recommendation, setRecommendation] = useState(
        getRecommendation(parkings)
    );

    useEffect(() => {
        setRecommendation(getRecommendation(parkings));
    }, [parkings]);

    const handleClick = () => {
        window.open(recommendation.bestParking.url);
    };

    console.log(recommendation, 'reccc');

    if (!recommendation.bestParking.hasOwnProperty('location'))
        return <h3>Loading...</h3>;

    return (
        <aside className={styles.asideContainer}>
            <div className={styles.verticalCard}>
                <h2>Most recommended option</h2>
                <img
                    className={styles.imgCard}
                    src={
                        recommendation.bestParking.image_url ||
                        '../../assets/img/notfound.png'
                    }
                    alt='Parking front.'
                />
                <h3>{recommendation.bestParking.name}</h3>
                <article>
                    <p>Address:</p>
                    <p>
                        {recommendation.bestParking.location.address1},{' '}
                        {recommendation.bestParking.location.city}
                    </p>
                </article>
                <article>
                    <p>Phone:</p>
                    <p>
                        {recommendation.bestParking.display_phone ||
                            'Not Found'}
                    </p>
                </article>
                <article>
                    <p>Score:</p>
                    <p>{recommendation.maxScore}</p>
                </article>
                <article>
                    <p>Stars:</p>
                    <p>{recommendation.bestParking.rating}</p>
                </article>
                <article>
                    <p>Is closed:</p>
                    <p>{recommendation.bestParking.is_closed ? 'Yes' : 'No'}</p>
                </article>
                <button className={styles.buttonRedirect} onClick={handleClick}>
                    To parking's website
                </button>
            </div>
        </aside>
    );
}

export default Aside;
