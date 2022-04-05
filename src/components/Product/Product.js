import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Product.css'

const Product = ({product}) => {
    const {name,picture,price,ratting} = product;
    const navigate = useNavigate();
    const handleShowReviews = () =>{
        navigate('/reviews')
    }
    return (
        <div className='product'>
            <img src={picture} alt="" />
            <h4>{name}</h4>
            <p>Price: {price}</p>
            <p>Ratting: {ratting}</p>
            <button onClick={handleShowReviews}>Reviews</button>
        </div>
    );
};

export default Product;