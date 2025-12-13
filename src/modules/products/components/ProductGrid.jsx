// src/modules/products/components/ProductGrid.jsx
import React from "react";
import { useNavigate } from "react-router-dom";
import "./product.css";

export default function ProductGrid({ products, addToCart }) {
  const navigate = useNavigate();

  return (
    <div className="product-grid">
      {products.map((product) => (
        <div
          key={product.id}
          className="p-card"
          onClick={() => navigate(`/product/${product.id}`)}
        >
          <div className="p-media">
            <img
              src={product.image}
              alt={product.title}
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                borderRadius: "8px",
              }}
            />
            <div className="p-image-gradient"></div>
          </div>

          <div className="p-body">
            <h3 className="p-title">{product.title}</h3>
            <div className="p-bottom">
              <span className="price">${product.price.toFixed(2)}</span>
              <button
                className="btn-add-cart"
                onClick={(e) => {
                  e.stopPropagation();
                  addToCart(product);
                  alert(`${product.title} added to cart!`);
                }}
              >
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
