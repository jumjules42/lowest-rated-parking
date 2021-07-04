import getScore from './getScore';

function getRecommendation(array) {
    let maxScore = 0;
    let bestParking = {};

    array.forEach((el) => {
        const currentScore = getScore(el.review_count, el.rating);
        if (currentScore > maxScore) {
            maxScore = currentScore;
            bestParking = el;
        }
        if (currentScore === maxScore && el.distance < bestParking.distance) {
            bestParking = el;
        }
    });

    return {
        bestParking,
        maxScore,
    };
}

export default getRecommendation;
