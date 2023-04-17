import React, { useState } from 'react';
import Cart from '../Cart/Cart';
import { Link, useLoaderData } from 'react-router-dom';
import ReviewItem from '../ReviewItem/ReviewItem';
import './OrderRevierw.css'
import { deleteShoppingCart, removeFromDb } from '../../utilities/fakedb';

const OrderReview = () => {
    const savedCart = useLoaderData();
    const [cart, setCart] = useState(savedCart);

    const handleRemoveFromCart = id => {
        const remaining = cart.filter(product => product.id !== id)
        setCart(remaining);
        removeFromDb(id)
    }

    const handleClearCart = () => {
        setCart([])
        deleteShoppingCart()
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
                    <Cart cart={cart} handleClearCart={handleClearCart}>
                        <Link to="/checkout"><button>Processed Checkout</button></Link>
                    </Cart>
                </div>
            </div>
        </div>
    );
};

export default OrderReview;