import React from 'react';
import './Product.css'


const Product = (props) => {
    console.log(props.product.name)
    const {img, name, seller, price, stock} = props.product
    return (
        <div className="product">
           <div>
               <img src={img} alt="" />
           </div>
           <div>
               <h4 className="product-name">{name}</h4>
               <br />
               <p><small>By: {seller}</small></p>
               <br />
               <p>$ {price}</p>
               <p><small>only{stock}left in the stock-order soon</small></p>
               <button className="main-button" onClick={ () => props.handleProductAdd(props.product)}>add to cart</button>
           </div>
        </div>
    );
};

export default Product;