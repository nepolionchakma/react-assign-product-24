const getStoreCart = () => {
    const getLocalCart = localStorage.getItem('cart');
    if (getLocalCart) {
        return JSON.parse(getLocalCart);
    }
    return [];
}
const addToLocalStorage = data => {
    const cart = getStoreCart();
    cart.push(data);
    localStorage.setItem('cart', JSON.stringify(cart))
    // saveCartLocal(cart);
}
const handleRemove = data => {
    const cart = getStoreCart();
    const remaining = cart.filter(idx => idx !== data);
    localStorage.setItem('cart', JSON.stringify(remaining));
    // saveCartLocal(remaining)
}
export { addToLocalStorage, getStoreCart, handleRemove }

// const saveCartLocal = cart => {
//     const setLocalCart = JSON.stringify(cart);
//     localStorage.setItem('cart', setLocalCart)
// }