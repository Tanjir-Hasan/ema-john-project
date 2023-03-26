import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import './Products.css';

const Products = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, []);

    const handleAddToCart = product => {
        console.log(product)
    };

    return (
        <div className='products-container'>
            <div className='product-container'>
                {
                    products.map(product => <Product 
                        key={product.id} 
                        product={product} 
                        handleAddToCart={handleAddToCart}>
                            
                        </Product>)
                }
            </div>
            <div className='product-summary'>
                <h5 className='product-summary-title'>Order Summary</h5>
            </div>
        </div>
    );
};

export default Products;