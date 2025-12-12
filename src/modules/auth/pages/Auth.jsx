import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./auth.css";

export default function Auth({ setUser }) {
  const navigate = useNavigate();
  const [isRegister, setIsRegister] = useState(false); // toggle between login/register
  const [email, setEmail] = useState("");
  const [name, setName] = useState(""); // for register
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  // Simulated login
  function handleLogin(e) {
    e.preventDefault();
    if (email && password) {
      const user = { name: "Joshua", email }; // replace with backend check
      localStorage.setItem("user", JSON.stringify(user));
      setUser(user);
      navigate("/");
    } else {
      setError("Please enter valid email and password");
    }
  }

  // Simulated register
  function handleRegister(e) {
    e.preventDefault();
    if (name && email && password) {
      const user = { name, email };
      localStorage.setItem("user", JSON.stringify(user));
      setUser(user);
      navigate("/");
    } else {
      setError("Please fill in all fields");
    }
  }

  return (
    <div className="auth-container">
      <h2>{isRegister ? "Register" : "Login"} to Stukart</h2>

      <div className="auth-toggle">
        <button
          className={!isRegister ? "active" : ""}
          onClick={() => setIsRegister(false)}
        >
          Login
        </button>
        <button
          className={isRegister ? "active" : ""}
          onClick={() => setIsRegister(true)}
        >
          Register
        </button>
      </div>

      {isRegister ? (
        <form onSubmit={handleRegister} className="auth-form">
          <input
            type="text"
            placeholder="Full Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          {error && <p className="error">{error}</p>}
          <button type="submit">Register</button>
        </form>
      ) : (
        <form onSubmit={handleLogin} className="auth-form">
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          {error && <p className="error">{error}</p>}
          <button type="submit">Login</button>
        </form>
      )}
    </div>
  );
}
