import React from "react";

export default function Card({ product }) {
  return (
    <div className="card">
      <img src={product.image} alt="product" className="product-image" />
      <h2 className="product-title">{product.title}</h2>
      <div className="product-price">Price: {product.price}</div>
      <div className="btn">Add to Cart</div>
    </div>
  );
}
