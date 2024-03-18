import { useEffect } from "react";
import Product from "../Product/Product";
import { useState } from "react";
import { addToLocalStorage, getStoreCart, handleRemove } from "../Utility/localstorage";


const Products = () => {

    const [products, setProduct] = useState([]);
    const [cart, setCart] = useState([]);

    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then(res => res.json())
            .then(data => setProduct(data))
    }, []);

    useEffect(() => {
        // console.log(products)
        // console.log(products.length)
        if (products.length) {
            const storeCartLocal = getStoreCart();
            // console.log(storeCartLocal)
            const saveCart = [];
            for (const id of storeCartLocal) {
                const productArray = products.find(product => product.id === id)
                if (productArray) {
                    saveCart.push(productArray);
                }
            }
            setCart(saveCart);
        }
    }, [products])

    const handleCart = (product) => {
        const newCartArray = [...cart, product];
        setCart(newCartArray);
        addToLocalStorage(product.id);
        console.log(product.id);
    }

    const handleRemoveCart = id => {
        const remainingCart = cart.filter(s => s.id !== id);
        setCart(remainingCart);
        handleRemove(id)
    }

    return (
        <div>
            <h4>cart items: {cart.length}</h4>
            <div className="w-2/6 flex">
                {
                    cart.map(cartItem =>
                        <div>
                            <li className="border">{cartItem.price}</li>
                            <img className="w-2/6" src={cartItem.image} alt="" />
                            <button onClick={() => handleRemoveCart(cartItem.id)}>remove</button>
                        </div>)
                }
            </div>
            <div className="grid grid-cols-4 gap-3 ">
                {
                    products.map(product => <Product
                        key={product.id}
                        product={product}
                        handleCart={handleCart}
                    ></Product>)
                }
            </div>

        </div>
    );
};

export default Products;