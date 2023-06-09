import React from 'react';
import './Cart.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashCan } from '@fortawesome/free-solid-svg-icons'

const Cart = ({cart, handleClearCart, children}) => {
    
    // total calculation
    let totalPrice = 0;
    let totalShipping =0;
    let quantity = 0;
    for (const product of cart) {
        product.quantity = product.quantity || 1;

        totalPrice = totalPrice + product.price * product.quantity;
        totalShipping = totalShipping + product.shipping;
        quantity = quantity + product.quantity;
    };

    const tax = totalPrice * 7 / 100;

    const grandTotal = totalPrice + totalShipping + tax;

    return (
        <div className='product-summary'>
            <h5 className='product-summary-title'>Order Summary</h5>
            <div className='product-summary-details'>
                <p>Selected Items: {quantity}</p>
                <p>Total Price: ${totalPrice}</p>
                <p>Total Shipping Charge: ${totalShipping}</p>
                <p>Tax: ${tax.toFixed(2)}</p>
                <h6 className='grand-total'>Grand Total: ${grandTotal.toFixed(2)}</h6>
                <button onClick={handleClearCart} className='btn-clear'>Clear cart <FontAwesomeIcon icon={faTrashCan} /></button>
                {children}
            </div>
        </div>
    );
};

export default Cart;