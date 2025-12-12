import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./navbar.css"; // we'll create this CSS below

export default function Navbar() {
  const navigate = useNavigate();

  return (
    <header className="stk-nav">
      <div className="container nav-inner">
        <div className="brand" onClick={() => navigate("/")}>
          <div className="logo">STUKART</div>
          <div className="tag muted">Curated goods</div>
        </div>

        <nav className="nav-links">
          <Link to="/products" className="nav-link">Products</Link>
          <Link to="/sell" className="nav-link">Sell</Link>
          <Link to="/cart" className="nav-link">Cart</Link>
          <Link to="/auth" className="nav-link">Login</Link>
        </nav>
      </div>
    </header>
  );
}
