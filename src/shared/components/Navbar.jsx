import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./navbar.css";

export default function Navbar({ user, setUser }) {
  const navigate = useNavigate();
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const handleLogout = () => {
    localStorage.removeItem("user");
    setUser(null);
    navigate("/auth");
  };

  return (
    <header className="stk-nav">
      <div className="container nav-inner">
        <div className="brand">
          <Link to="/" className="logo-link">
            <div className="logo">STUKART</div>
            <div className="tag muted">Curated goods</div>
          </Link>
        </div>

        <nav className="nav-links">
          <Link to="/products" className="nav-link">Products</Link>
          <Link to="/sell" className="nav-link">Sell</Link>
          <Link to="/cart" className="nav-link">Cart</Link>

          {user ? (
            <div 
              className="nav-link dropdown" 
              onMouseEnter={() => setDropdownOpen(true)} 
              onMouseLeave={() => setDropdownOpen(false)}
              style={{ position: "relative", cursor: "pointer" }}
            >
              {user.name}
              {dropdownOpen && (
                <div className="dropdown-menu">
                  <Link to="/profile" className="dropdown-item">Profile</Link>
                  <span onClick={handleLogout} className="dropdown-item logout">Logout</span>
                </div>
              )}
            </div>
          ) : (
            <Link to="/auth" className="nav-link">Login</Link>
          )}
        </nav>
      </div>
    </header>
  );
}
