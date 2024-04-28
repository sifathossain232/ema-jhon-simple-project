import React from 'react';
import { RiDeleteBinLine } from 'react-icons/ri';

const ReviewItem = ({ product, handleRemoveFromCart }) => {
    const { id, img, name, price, quantity } = product;
    return (
        <div className='border border-gray-500 rounded-lg w-[571px] h-[107px] mb-6 p-2'>
            <div className='flex items-center gap-2 relative'>
                <img className='w-[91px] h-[91px] rounded-lg' src={img} alt="" />
                <div className='tracking-[0.0015em] leading-6 font-normal'>
                    <p className='text-xl'>{name}</p>
                    <p className='text-lg'>Price: <span className='text-orange-500'>${price}</span></p>
                    <p className='text-lg'>Order Quantity <span className='text-orange-500'>${quantity}</span></p>
                </div>
                <div className='absolute ml-[500px]'>
                    <button onClick={() => handleRemoveFromCart(id)} className=' h-[55px] w-[55px] m-auto bg-[#f9cdcd] rounded-full'>
                        <RiDeleteBinLine className='text-[#EB5757] ml-[14px] text-[27px]' />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ReviewItem;