import { useState } from 'react';
import fakeData from "../fakeData";
import React from 'react';
import './Shop.css';
import Product from './Product/Product';

const Shop = () => {
    const first_ten = fakeData.slice(0, 10)
    const [product, setProduct] = useState(first_ten);

    const [value, setValue] = useState([])
    const price = value.reduce((total, data) => total + data.price, 0)
    const cost = parseInt(price)

    const handleClick = (product) => {
        const newValue = [...value, product]
        setValue(newValue)
    }
    const tax = parseInt(cost * 0.1)
    return (
        <div className="container">
            <div className="product-container">
                {
                    product.map(product => <Product handleClick={handleClick} data={product}></Product>)
                }
            </div>
            <div className="cart-container">
                <h3>Order Summary</h3>
                <h4>Item Ordered: {value.length}</h4>
                <p>Product's Cost : <span>${cost}</span></p>
                <p>Item's Tax Total: <span>${tax}</span></p>
                <p>Shipping Cost  : <span>$20</span></p>
                <h1>Total Price : <span className="color">${cost + tax + 20}</span></h1>
            </div>
        </div>
    );
};



export default Shop;