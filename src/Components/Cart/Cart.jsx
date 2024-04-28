import React from 'react';
import { RiDeleteBinLine } from 'react-icons/ri';


const Cart = ({ cart,handleClearCart }) => {
    console.log(cart);

    let totalPrice = 0;
    let totalShipping = 0;
    let quantity = 0;
    for (const product of cart) {
        totalPrice = totalPrice + product.price * product.quantity;
        totalShipping = totalShipping + product.shipping * product.quantity;
        quantity = quantity + product.quantity;
    }
    const tax = totalPrice * 7 / 100;
    const grandTotal = totalPrice + totalShipping + tax;


    return (
        <div className='top-0 sticky bg-[#FFE0B3]'>
            <h4 className='flex justify-center font-semibold text-lg py-7 tracking-wider'>Order summary</h4>
            <div className='ml-20 pb-7 flex flex-col text-lg gap-2'>
                <p>Selacted Items: {quantity}</p>
                <p>Total Price: ${totalPrice}</p>
                <p>Total Shipping Charge: ${totalShipping}</p>
                <p>Tax: ${tax.toFixed(2)}</p>
                <h6>Grand Total: ${grandTotal.toFixed(2)}</h6>
            </div>
            <div className='flex justify-center'>
                <button onClick={handleClearCart} className='flex items-center justify-between px-4 text-xl w-[90%] h-14 bg-[#FF3030] text-white rounded-md'>
                    Clear Cart
                    <RiDeleteBinLine className='text-xl' />
                </button>
            </div>
        </div>
    );
};

export default Cart;