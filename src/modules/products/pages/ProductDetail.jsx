import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import PRODUCTS from "../data/products";

export default function ProductDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const product = PRODUCTS.find(p => p.id === id);

  if (!product) {
    return (
      <main className="container" style={{ paddingTop: 18 }}>
        <h2>Product not found</h2>
        <button className="btn" onClick={() => navigate("/products")}>Back to products</button>
      </main>
    );
  }

  return (
    <main className="container" style={{ paddingTop: 18 }}>
      <div style={{ display: "flex", gap: 24, alignItems: "flex-start" }}>
        <div style={{ flex: 1 }}>
          <div style={{ borderRadius: 12, overflow: "hidden", height: 360, background: "linear-gradient(135deg,#1f2937 0%, rgba(124,92,255,0.12) 40%)" }} />
        </div>
        <div style={{ width: 480 }}>
          <h1>{product.title}</h1>
          <p className="muted">{product.description}</p>
          <div style={{ marginTop: 12, display: "flex", gap: 12, alignItems: "center" }}>
            <div style={{ fontSize: 20, fontWeight: 700 }}>${product.price.toFixed(2)}</div>
            <div className="muted">⭐ {product.rating}</div>
          </div>
          <div style={{ marginTop: 18 }}>
            <button className="btn" onClick={() => alert("Add to cart - not wired yet")}>Add to cart</button>
            <button className="btn ghost" onClick={() => navigate(-1)} style={{ marginLeft: 8 }}>Back</button>
          </div>
        </div>
      </div>
    </main>
  );
}
