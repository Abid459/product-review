import React from 'react';
import './Review.css'

const Review = (props) => {
    const {name,review} =props.review;
    return (
        <div className='review'>
            <h3>name: {name}</h3>
            <p>{review}</p>
        </div>
    );
};

export default Review;