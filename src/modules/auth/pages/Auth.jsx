import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./auth.css"; // Make sure this file exists

export default function Auth({ setUser }) {
  const navigate = useNavigate();
  const [isRegister, setIsRegister] = useState(false);
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  // Redirect already logged-in users
  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) navigate("/products");
  }, []);

  const handleLogin = (e) => {
    e.preventDefault();
    if (email && password) {
      const user = { name: "Joshua", email }; // Replace with your backend
      localStorage.setItem("user", JSON.stringify(user));
      setUser(user);
      navigate("/products"); // Redirect to Products page
    } else {
      setError("Please enter valid email and password");
    }
  };

  const handleRegister = (e) => {
    e.preventDefault();
    if (name && email && password) {
      const user = { name, email };
      localStorage.setItem("user", JSON.stringify(user));
      setUser(user);
      navigate("/products"); // Redirect to Products page
    } else {
      setError("Please fill in all fields");
    }
  };

  return (
    <div className="auth-container">
      <h2>{isRegister ? "Register" : "Login"} to Stukart</h2>
      <div className="auth-toggle">
        <button className={!isRegister ? "active" : ""} onClick={() => setIsRegister(false)}>Login</button>
        <button className={isRegister ? "active" : ""} onClick={() => setIsRegister(true)}>Register</button>
      </div>

      {isRegister ? (
        <form onSubmit={handleRegister} className="auth-form">
          <input type="text" placeholder="Full Name" value={name} onChange={(e) => setName(e.target.value)} required />
          <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
          <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
          {error && <p className="error">{error}</p>}
          <button type="submit">Register</button>
        </form>
      ) : (
        <form onSubmit={handleLogin} className="auth-form">
          <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
          <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
          {error && <p className="error">{error}</p>}
          <button type="submit">Login</button>
        </form>
      )}
    </div>
  );
}
