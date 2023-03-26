import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import './Products.css';

const Products = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);

    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, []);

    const handleAddToCart = product => {
        const newCart = [...cart, product];
        setCart(newCart);
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
                <div className='product-summary-details'>
                    <p>Selected Items: {cart.length}</p>
                </div>
            </div>
        </div>
    );
};

export default Products;