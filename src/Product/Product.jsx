

import PropTypes from 'prop-types';
const Product = ({ product, handleCart }) => {
    // console.log(product);
    const { title, price, image } = product;
    const sliceTitle = title.slice(0, 10) + "..";
    return (
        <div className="border rounded hover:bg-green-300 flex flex-col items-center">
            <h6>{sliceTitle}</h6>
            <p>Price <span>{price}</span></p>
            <figure className="w-2/6 "><img src={image} alt="" /></figure>
            <button onClick={() => handleCart(product)}>Cart</button>
        </div>
    );
};
Product.propTypes = {
    product: PropTypes.object.isRequired,
    handleCart: PropTypes.func.isRequired
}
export default Product;