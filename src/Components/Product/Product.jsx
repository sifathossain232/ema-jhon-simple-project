import React from 'react';
import { FaShoppingCart } from "react-icons/fa";


const Product = ({ product, handleAddToCart }) => {
    const { img, name, seller, ratings, quantity, price } = product;

    return (
        <div className='border border-[#95a0a7] w-[300px] h-[510px] rounded-lg relative'>
            <img className='w-[286px] h-[286px] rounded-lg m-2 mx-auto' src={img} alt="" />
            <div className='ml-4'>
                <h6 className='text-lg font-medium font-serif mt-2'>{name}</h6>
                <p className='my-2'>Manufacturer: {seller}</p>
                <p>Price: ${price}</p>
                <p className='my-2'>Rating: {ratings} star</p>
            </div>
            <button onClick={() => handleAddToCart(product)} className='absolute bottom-0 flex justify-center items-center gap-4 w-full h-12 rounded-b-lg border border-gray-500 bg-[#FFE0B3] hover:bg-orange-500 duration-200 delay-200'>
                Add to Cart <span className='cart-icon font-medium text-orange-600'><FaShoppingCart></FaShoppingCart></span>
            </button>
        </div>
    );
};

export default Product;