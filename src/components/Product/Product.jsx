import React from 'react';
import './Product.css';

const Product = (props) => {
    const { name, seller, price, img, ratings } = props.product;
    const handleAddToCart = props.handleAddToCart;

    return (
        <div className='container'>
            <img src={img} alt="" />
            <h6 className='product-name'>{name}</h6>
            <p className='product-price'>Price: ${price}</p>
            <p className='product-seller'>Manufacturer: {seller}</p>
            <p className='product-ratings'>Ratings: {ratings}</p>
            <button onClick={() => handleAddToCart(props.product)} className='btn-cart'>Add to cart</button>
        </div>
    );
};

export default Product;