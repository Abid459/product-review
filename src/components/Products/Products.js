import React from 'react';
import Product from '../Product/Product';
import './Products.css'

const Products = ({products}) => {
    // const {}
    return (
        <div >
            <h3>Our best selling Products</h3>
            <div className='products'>

            {
                products.map(product=><Product
                    key={product.id}
                    product = {product}
                    ></Product>)
                }
                </div>
        </div>
    );
};

export default Products;