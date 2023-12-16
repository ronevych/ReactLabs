// src/pages/CartPage.js
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart } from '../../redux/actions';

const CartPage = () => {
    const cartItems = useSelector(state => state.cartItems);
    const dispatch = useDispatch();

    const handleRemoveFromCart = (productId) => {
        dispatch(removeFromCart(productId));
    };

    return (
        <div>
            <h2>Shopping Cart</h2>
            {cartItems.map(item => (
                <div key={item.id}>
                    <p>{item.name} - ${item.price}</p>
                    <button onClick={() => handleRemoveFromCart(item.id)}>Remove</button>
                </div>
            ))}
        </div>
    );
};

export default CartPage;
