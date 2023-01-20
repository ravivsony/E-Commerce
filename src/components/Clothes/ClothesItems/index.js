//Dependencies
import React from "react";
import { FaCartPlus } from "react-icons/fa";
//Internals

const ClothesItems = ({products}) => (
  <div className="items">
    {products && products.map((product) => {
      if (product.category === "clothes") {
        return (
          <div className="item">
            <div className="product-img">
              <img alt={product.name} src={product.img} />
            </div>
            <div className="product-details">
              <h1 id="product-name">{product.name}</h1>
              <h4 id="product-description">{product.description}</h4>
              <h5 id="product-size">Size: {product.size}</h5>
            </div>
            <div className="price-add">
              <h5 id="product-price">&#x20B9;{product.price}</h5>
              <FaCartPlus id="add-icon" style={{ fontSize: "x-large" }} />
            </div>
          </div>
        );
      }
    })}
  </div>
);

export default ClothesItems;
