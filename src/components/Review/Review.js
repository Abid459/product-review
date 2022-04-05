import React from 'react';
import './Review.css'

const Review = (props) => {
    const {name,review,ratting} =props.review;
    return (
        <div className='review'>
            <h3>Name: {name}</h3>
            <p>{review}</p>
            <p>Ratting:{ratting}</p>
        </div>
    );
};

export default Review;