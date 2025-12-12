import React from "react";
import ProductCard from "./ProductCard";
import "./product.css";

export default function ProductGrid({ products = [] }) {
  return (
    <section className="product-grid">
      {products.map(p => <ProductCard key={p.id} product={p} />)}
      {products.length === 0 && <div className="muted">No products found.</div>}
    </section>
  );
}
