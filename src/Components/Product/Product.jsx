import React from 'react';
import './Product.css';
import { FaShoppingCart } from "react-icons/fa";


const Product = ({ product, handleAddToCart }) => {
    const { img, name, seller, ratings, quantity, price } = product;

    return (
        <div className='product'>
            <img src={img} alt="" />
            <div className='product-info'>
                <h6 className='product-name'>{name}</h6>
                <p>Price: ${price}</p>
                <p>Manufacturer: {seller}</p>
                <p>Rating: {ratings} star</p>
            </div>
            <button onClick={() => handleAddToCart(product)} className='btn-cart'>
                Add to Cart <span className='cart-icon'><FaShoppingCart></FaShoppingCart></span>
            </button>
        </div>
    );
};

export default Product;