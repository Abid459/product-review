import React from 'react';
import Product from '../Product/Product';
import './Products.css'

const Products = ({products}) => {
    // const {}
    return (
        <div className='products'>
            {
                products.map(product=><Product
                key={product.id}
                product = {product}
                ></Product>)
            }
        </div>
    );
};

export default Products;