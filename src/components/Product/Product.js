import React from 'react';
import './Product.css'

const Product = ({product}) => {
    const {name,picture,price,ratting} = product;
    return (
        <div className='product'>
            <img src={picture} alt="" />
            <h4>{name}</h4>
            <p>Price: {price}</p>
            <p>Ratting: {ratting}</p>
            <button>Reviews</button>
        </div>
    );
};

export default Product;