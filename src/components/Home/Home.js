import React, { useEffect, useState } from 'react';
import './Home.css'
import Products from '../Products/Products';
import useReviews from '../../hooks/useReviews';
import Review from '../Review/Review';
import { useNavigate } from 'react-router-dom';

const Home = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])
    const navigate = useNavigate();
    const HandleShowAll = () => {
        navigate('/reviews')
    }
    const reviews = useReviews().splice(0, 3);
    return (
        <div>
            <div className="banner">
                <div className="banner-info">
                    <h3>Elegant Engagement rings</h3>
                    <h4>Start Your happy journey</h4>
                    <p>Find inspiration for a proposal, explore design options for your handcrafted ring and more. Well help you make your moment.</p>
                </div>
                <div className="img">
                    <img src="" alt="" />
                </div>
            </div>
            <Products products={products}></Products>
            <div>
                    <h2>Customer reviews</h2>    
                <div className="reviews-home">

                    {
                        reviews.map(review => <Review
                            key={review.id}
                            review={review}
                        ></Review>)
                    }
                </div>
                <button onClick={HandleShowAll}>Show all reviews</button>
            </div>

        </div>
    );
};

export default Home;