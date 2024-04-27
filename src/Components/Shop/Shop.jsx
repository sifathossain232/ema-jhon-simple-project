import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import Cart from '../Cart/Cart';
import { addToDb, getShoppingCart } from '../Utilities/fakedb';


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
        if(!exists){
            product.quantity = 1;
            newCart = [...cart, product]
        }
        else{
            exists.quantity = exists.quantity + 1;
            const remaining = cart.filter(product => product.id !==product.id);
            newCart = [...remaining, exists];
        }
        setCart(newCart);
        addToDb(product.id)

    }
    return (
        <div className='grid grid-cols-5 ml-14'>
            <div className="grid grid-cols-subgrid col-span-4 gap-4 mt-32">
                {
                    products.map(product => <Product
                        key={product.id}
                        product={product}
                        handleAddToCart={handleAddToCart}
                    ></Product>)
                }
            </div>
            <div className="cart-container">
                {/* <h4>Order summary</h4>
            <p>Selacted Items: {cart.length}</p> */}
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Shop;