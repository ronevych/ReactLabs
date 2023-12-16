import React from 'react';
import { useDispatch } from 'react-redux';
import { addToCart } from '../redux/actions';

const Product = ({ id, name, price }) => {
    const dispatch = useDispatch();

    const handleAddToCart = () => {
        dispatch(addToCart({ id, name, price }));
    };

    return (
        <div>
            <h3>{name}</h3>
            <p>Price: ${price}</p>
            <button onClick={handleAddToCart}>Add to Cart</button>
        </div>
    );
};

export default Product;
