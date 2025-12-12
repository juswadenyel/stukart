import React from "react";
import "./hero.css";

export default function Hero() {
  return (
    <section className="hero">
      <div className="container hero-inner">
        <div className="hero-left">
          <h1 className="hero-title">Discover premium picks for modern life</h1>
          <p className="muted">Handpicked products, fast checkout, secure payments. Built with love — ready to sell.</p>
          <div style={{ marginTop: 18 }}>
            <a className="btn" href="/products">Shop Products</a>
            <a className="btn ghost" href="/sell" style={{ marginLeft: 8 }}>Sell with us</a>
          </div>
        </div>
        <div className="hero-right" aria-hidden>
          <div className="hero-card">
            <div className="product-preview">Aurora Backpack</div>
            <div className="price">$129.00</div>
          </div>
        </div>
      </div>
    </section>
  );
}
