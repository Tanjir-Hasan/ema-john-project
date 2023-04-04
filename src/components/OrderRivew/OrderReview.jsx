import React, { useState } from 'react';
import Cart from '../Cart/Cart';
import { useLoaderData } from 'react-router-dom';
import ReviewItem from '../ReviewItem/ReviewItem';
import './OrderRevierw.css'
import { removeFromDb } from '../../utilities/fakedb';

const OrderReview = () => {
    const savedCart = useLoaderData();
    const [cart, setCart] = useState(savedCart);

    const handleRemoveFromCart = id => {
        const remaining = cart.filter(product => product.id !==id)
        setCart(remaining);
        removeFromDb(id)
    }
    // console.log(products)
    return (
        <div>
            <div className='products-container'>
                <div className='review-container'>
                    {
                        cart.map(product => <ReviewItem 
                        key={product.id}
                        product={product}
                        handleRemoveFromCart={handleRemoveFromCart}></ReviewItem>)
                    }
                </div>
                <div className='product-summary'>
                    <Cart cart={cart}></Cart>
                </div></div>
        </div>
    );
};

export default OrderReview;