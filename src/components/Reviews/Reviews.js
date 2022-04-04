import React from 'react';
import useReviews from '../../hooks/useReviews';
import Review from '../Review/Review';
import './Reviews.css'

const Reviews = () => {
    const reviews = useReviews();
    console.log(reviews)
    return (
        <div className='reviews'>
            {
                reviews.map(review=><Review
                key={review.id}
                review = {review}
                ></Review>)
            }
        </div>
    );
};

export default Reviews;