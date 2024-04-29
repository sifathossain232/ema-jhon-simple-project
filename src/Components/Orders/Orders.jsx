import React, { useState } from 'react';
import Cart from '../Cart/Cart';
import { Link, useLoaderData } from 'react-router-dom';
import ReviewItem from '../ReviewItem/ReviewItem';
import { deleteShoppingCart, removeFromDb } from '../Utilities/fakedb';
import { FaArrowRight } from 'react-icons/fa';

const Orders = () => {
    const SavedCart = useLoaderData();
    const [cart, setCart] = useState(SavedCart)

    const handleRemoveFromCart = (id) => {
        console.log(id);
        const remaining = cart.filter(product => product.id !== id);
        setCart(remaining);
        removeFromDb(id);
    }

    const handleClearCart = () => {
        setCart([]);
        deleteShoppingCart();
    }

    return (
        <div className='grid grid-cols-2'>
            <div className='m-14 ml-80'>
                {
                    SavedCart.map(product => <ReviewItem
                        key={product.id}
                        product={product}
                        handleRemoveFromCart={handleRemoveFromCart}
                    ></ReviewItem>)
                }
            </div>
            <div className='relative'>
                <div className='w-96  absolute right-0'>
                    <Cart
                        cart={SavedCart}
                        handleClearCart={handleClearCart}
                    >
                        <div className='flex justify-center mt-2'>
                            <Link className=' text-xl w-[90%] bg-[#FF9900] rounded-md' to="/orders">
                                <button className='w-full'>
                                    <div className='flex items-center justify-between px-4 h-14'>
                                        Proceed Checkout
                                        <FaArrowRight className='text-white' />
                                    </div>
                                </button>
                            </Link>
                        </div>
                    </Cart>
                </div>
            </div>
        </div>
    );
};

export default Orders;