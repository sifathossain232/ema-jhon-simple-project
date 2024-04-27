import React from 'react';
import Cart from '../Cart/Cart';
import { useLoaderData } from 'react-router-dom';

const Orders = () => {
    const cart = useLoaderData();
    console.log(cart);
    return (
        <div className='grid grid-cols-5 ml-14'>
            <div className='grid grid-cols-subgrid col-span-4 gap-4 mt-32'>
                <h2>Orders page: {cart.length}</h2>
            </div>
            <div>
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Orders;