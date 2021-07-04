function getScore(reviews, rating) {
    const score = (reviews * rating) / (reviews + 1);
    return Number.isInteger(score) ? score : score.toFixed(2);
}

export default getScore;
