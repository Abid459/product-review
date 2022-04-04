import React, { useEffect, useState } from 'react';
import './Home.css'
import Products from '../Products/Products';
import useReviews from '../../hooks/useReviews';
import Review from '../Review/Review';

const Home = () => {
    const [products,setProducts] = useState([]);
    useEffect(()=>{
        fetch('products.json')
        .then(res => res.json())
        .then(data =>setProducts(data))
    },[])

    const reviews = useReviews().splice(0,3);
    return (
        <div>
            <div className="banner">
                <div className="banner-info">
                    <h3>Engagement rings</h3>
                    <h4>Start Your happy journey</h4>
                    <p>Find inspiration for a proposal, explore design options for your handcrafted ring and more. Well help you make your moment.</p>
                </div>
                <div className="img">
                    <img src="" alt="" />
                </div>
            </div>
            <Products products={products}></Products>
            <div className="reviews">

            {
                reviews.map(review =><Review
                    key={review.id}
                    review = {review}
                    ></Review>)
                }
                </div>

        </div>
    );
};

export default Home;