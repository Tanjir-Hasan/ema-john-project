import React from 'react';
import './ReviewItem.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashCan } from '@fortawesome/free-solid-svg-icons'

const ReviewItem = ({ product, handleRemoveFromCart }) => {
    const { img, id, price, quantity, name } = product;
    return (
        <div className='review-item'>
            <img src={img} alt="" />
            <div className='review-details'>
                <div>
                    <p>{name}</p>
                    <p>Price: ${price}</p>
                    <p>Quantity: {quantity}</p>
                </div>
                <div>
                    <button onClick={() => handleRemoveFromCart(id)} className='btn-del'><FontAwesomeIcon icon={faTrashCan} /></button>
                </div>
            </div>
        </div>
    );
};

export default ReviewItem;