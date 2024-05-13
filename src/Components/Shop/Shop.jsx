import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import Cart from '../Cart/Cart';
import { addToDb, deleteShoppingCart, getShoppingCart } from '../Utilities/fakedb';
import { Link } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa';


const Shop = () => {
    const [products, Setproducts] = useState([]);
    const [cart, setCart] = useState([]);
    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => Setproducts(data))
    }, []);

    useEffect(() => {
        const storedCart = getShoppingCart();
        const savedCart = [];
        //step_1: get id
        for (const id in storedCart) {
            //step_2: get the product by using id
            const addedProduct = products.find(product => product.id === id);
            if (addedProduct) {
                //step_3: get quantity of product
                const quantity = storedCart[id]
                addedProduct.quantity = quantity;
                //step_4: add the addedProduct to the save cart
                savedCart.push(addedProduct);
            }
            // console.log('Added Product', addedProduct);
        }
        // step_5: set the cart
        setCart(savedCart);
    }, [products]);

    const handleAddToCart = (product) => {
        // console.log(product);
        let newCart = [];
        // const newCart = [...cart, product];
        // if product dosen't exist in the cart, then set quantity = 1
        // if exist update quantity by 1
        const exists = cart.find(product => product.id === product.id);
        if (!exists) {
            product.quantity = 1;
            newCart = [...cart, product]
        }
        else {
            exists.quantity = exists.quantity + 1;
            const remaining = cart.filter(product => product.id !== product.id);
            newCart = [...remaining, exists];
        }
        setCart(newCart);
        addToDb(product.id)

    }

    const handleClearCart = () => {
        setCart([]);
        deleteShoppingCart();
    }

    return (
        <div className='grid grid-cols-4 ml-32'>
            <div className="grid grid-cols-subgrid col-span-3 gap-4 mt-14">
                {
                    products.map(product => <Product
                        key={product.id}
                        product={product}
                        handleAddToCart={handleAddToCart}
                    ></Product>)
                }
            </div>
            <div className="cart-container">
                <Cart cart={cart}
                    handleClearCart={handleClearCart}
                >
                    <div className='flex justify-center mt-2'>
                        <Link className=' text-xl w-[90%] bg-[#FF9900] rounded-md' to="/orders">
                            <button className='w-full'>
                                <div className='flex items-center justify-between px-4 h-14'>
                                    Review Order
                                    <FaArrowRight className='text-white' />
                                </div>
                            </button>
                        </Link>
                    </div>
                </Cart>
            </div>
        </div>
    );
};

export default Shop;