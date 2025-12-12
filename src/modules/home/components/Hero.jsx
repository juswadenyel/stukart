import React, { useEffect, useState } from "react";
import "./hero.css";

export default function Hero() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const currentUser = JSON.parse(localStorage.getItem("currentUser"));
    if (currentUser) {
      setUser(currentUser);
    }
  }, []);

  return (
    <section className="hero">
      <div className="container hero-inner">
        <div className="hero-left">
          <h1 className="hero-title">Discover premium picks for modern life</h1>
          <p className="muted">
            Handpicked products, fast checkout, secure payments. Built with love — ready to sell.
          </p>
          <div style={{ marginTop: 18, display: "flex", alignItems: "center" }}>
            <a className="btn" href="/products">Shop Products</a>
            <a className="btn ghost" href="/sell" style={{ marginLeft: 8 }}>Sell with us</a>

            {/* Dynamic login/user display */}
            <div style={{ marginLeft: 16 }}>
              {user ? (
                <span style={{ fontWeight: "bold" }}>Welcome, {user.name}!</span>
              ) : (
                <a className="btn" href="/auth" style={{ marginLeft: 8 }}>Log In</a>
              )}
            </div>
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
