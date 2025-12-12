// src/modules/products/pages/ProductDetail.jsx
import React, { useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import PRODUCTS from "../data/products";
import { CartContext } from "../../cart/context/CartContext";

export default function ProductDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useContext(CartContext);

  const product = PRODUCTS.find((p) => p.id === id);

  if (!product) {
    return (
      <main className="container" style={{ paddingTop: 24 }}>
        <h2 style={{ color: "#f5f6fa" }}>Product not found</h2>
        <button className="btn" onClick={() => navigate("/products")}>
          Back to products
        </button>
      </main>
    );
  }

  return (
    <main className="container" style={{ paddingTop: 24 }}>
      <div style={{ display: "flex", flexDirection: "row", gap: 32, flexWrap: "wrap" }}>
        <div style={{ flex: 1, minWidth: 280 }}>
          <img
            src={product.image}
            alt={product.title}
            style={{ width: "100%", height: 400, borderRadius: 16, objectFit: "cover" }}
          />
        </div>

        <div style={{ flex: 1, minWidth: 280 }}>
          <h1 style={{ color: "#7c5cff", marginBottom: 8 }}>{product.title}</h1>
          <p style={{ color: "#f5f6fa", marginBottom: 16 }}>{product.description}</p>

          <div style={{ display: "flex", gap: 16, alignItems: "center", marginBottom: 24 }}>
            <div style={{ fontSize: 24, fontWeight: 700, color: "#7c5cff" }}>
              ${product.price.toFixed(2)}
            </div>
            <div style={{ color: "rgba(245,246,250,0.7)" }}>⭐ {product.rating}</div>
          </div>

          <div style={{ display: "flex", gap: 12 }}>
            <button
              className="btn"
              style={{
                flex: 1,
                background: "#1e3a8a",
                color: "#fff",
                padding: "12px 0",
                borderRadius: 12,
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
                padding: "12px 0",
                borderRadius: 12,
                border: "1px solid #7c5cff",
                color: "#f5f6fa",
                fontWeight: 600,
                cursor: "pointer",
              }}
              onClick={() => navigate(-1)}
            >
              Back
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}
