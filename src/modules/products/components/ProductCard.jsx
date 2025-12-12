import React from "react";
import { useNavigate } from "react-router-dom";
import "./product.css";

export default function ProductCard({ product }) {
  const navigate = useNavigate();
  return (
    <article className="p-card" onClick={() => navigate(`/product/${product.id}`)} role="button" tabIndex={0}>
      <div className="p-media" aria-hidden>
        <div className="p-image-gradient" />
      </div>
      <div className="p-body">
        <h3 className="p-title">{product.title}</h3>
        <p className="muted small">{product.description}</p>
        <div className="p-bottom row">
          <div className="price">${product.price.toFixed(2)}</div>
          <div className="badges">
            {product.badges.map((b,i) => <span className="p-badge" key={i}>{b}</span>)}
          </div>
        </div>
      </div>
    </article>
  );
}
