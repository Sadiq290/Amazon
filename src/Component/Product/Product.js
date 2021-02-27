import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './product.css';


const Product = (props) => {
    // console.log(props)
    const { img, name, seller, price, stock } = props.data;
    const element = <FontAwesomeIcon icon={faShoppingCart} />
    return (
        <section className="section">
            <div className="section-img">
                <img src={img} alt="" />
            </div>
            <div className="section-text">
                <p>{name}</p>
                <small>By: {seller}</small>
                <h5>Value : ${price}</h5>
                <h5>Only {stock} left in the stock - Order Soon</h5>
                <button onClick={()=>props.handleClick(props.data)}>{element} Add to cart</button>
            </div>
        </section>
    );
};

export default Product;