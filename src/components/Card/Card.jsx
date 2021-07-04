import React from 'react';
import styles from './Card.module.css';

function Card({ parking }) {
    const ratingStars = [];
    for (let i = 0; i < parking.rating; i++) {
        ratingStars.push(<i key={`star-${i}`} className='uis uis-star'></i>);
    }

    const getScore = (reviews, rating) => {
        const score = (reviews * rating) / (reviews + 1);
        return Number.isInteger(score) ? score : score.toFixed(2);
    };

    const handleClick = () => {
        window.open(parking.url);
    };

    return (
        <div className={styles.cardContainer} onClick={handleClick}>
            <img
                src={parking.image_url || '../../assets/img/notfound.png'}
                alt={parking.name}
                className={styles.parkingPic}
            />
            <h3 className={styles.parkingName}>{parking.name}</h3>
            <section className={styles.location}>
                <p>{parking.location.address1},</p>
                <p>{parking.location.city}</p>
            </section>
            <h4 className={styles.parkingPhone}>
                {parking.phone || 'Not found'}
            </h4>
            <h4 className={styles.reviews}>{parking.review_count}</h4>
            <h4 className={styles.score}>
                {getScore(parking.review_count, parking.rating)}
            </h4>
            <section className={styles.starsContainer}>
                {ratingStars.map((star) => star)}
            </section>
        </div>
    );
}

export default Card;
