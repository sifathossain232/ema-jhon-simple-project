import { getShoppingCart } from "../Components/Utilities/fakedb";

const cartProductsLoder = async () => {
    const lodedProducts = await fetch('products.json');
    const products = await lodedProducts.json();

    // if cart datais in database, you have to use async await
    const storedCart = getShoppingCart();
    
    const savedCart = [];

    for(const id in storedCart){
        const addedProduct = products.find(product => product.id ===id);
        if(addedProduct){
            const quantity = storedCart[id];
            addedProduct.quantity = quantity;
            savedCart.push(addedProduct);
        }
    }
    return savedCart;
}

export default cartProductsLoder;