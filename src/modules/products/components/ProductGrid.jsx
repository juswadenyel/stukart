// src/modules/products/components/ProductGrid.jsx
import React from "react";
import { useNavigate } from "react-router-dom";

export default function ProductGrid({ products, addToCart }) {
  const navigate = useNavigate();

  return (
    <div
      style={{
        display: "grid",
        gap: 24,
        gridTemplateColumns: "repeat(auto-fill,minmax(240px,1fr))",
      }}
    >
      {products.map((product) => (
        <div
          key={product.id}
          className="product-card"
          style={{
            padding: 16,
            borderRadius: 16,
            background: "#1e2b4d",
            color: "#f5f6fa",
            boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            transition: "transform 0.2s",
          }}
        >
          <img
            src={product.image}
            alt={product.title}
            style={{
              height: 160,
              borderRadius: 12,
              objectFit: "cover",
              marginBottom: 12,
            }}
          />

          <h3 style={{ fontWeight: 600, marginBottom: 4 }}>{product.title}</h3>
          <p style={{ fontWeight: 700, color: "#7c5cff", marginBottom: 12 }}>
            ${product.price.toFixed(2)}
          </p>

          <div style={{ display: "flex", gap: 8 }}>
            <button
              className="btn"
              style={{
                flex: 1,
                background: "#1e3a8a",
                color: "#fff",
                padding: "8px 0",
                borderRadius: 8,
                fontWeight: 600,
                cursor: "pointer",
              }}
              onClick={() => {
                addToCart(product);
                alert(`${product.title} added to cart!`);
              }}
            >
              Add to Cart
            </button>

            <button
              className="btn ghost"
              style={{
                flex: 1,
                padding: "8px 0",
                borderRadius: 8,
                border: "1px solid #7c5cff",
                color: "#f5f6fa",
                fontWeight: 600,
                cursor: "pointer",
              }}
              onClick={() => navigate(`/product/${product.id}`)}
            >
              View
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
