import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./profile.css";

export default function Profile({ setUser }) {
  const navigate = useNavigate();
  const [user, setLocalUser] = useState({ name: "", email: "", password: "" });

  useEffect(() => {
    const currentUser = JSON.parse(localStorage.getItem("user"));
    if (currentUser) setLocalUser(currentUser);
    else navigate("/auth");
  }, []);

  const handleChange = (e) => setLocalUser({ ...user, [e.target.name]: e.target.value });

  const handleSave = () => {
    localStorage.setItem("user", JSON.stringify(user));
    alert("Profile updated!");
  };

  const handleLogout = () => {
    localStorage.removeItem("user");
    setUser(null);
    navigate("/auth");
  };

  return (
    <div className="profile-container">
      <aside className="profile-sidebar">
        <div className="avatar">{user.name[0]?.toUpperCase() || "U"}</div>
        <h2>{user.name}</h2>
        <p>{user.email}</p>
        <button className="btn-logout" onClick={handleLogout}>Logout</button>
      </aside>

      <main className="profile-main">
        <h1>Account Details</h1>
        <form className="profile-form" onSubmit={(e) => e.preventDefault()}>
          <label>Full Name</label>
          <input
            type="text"
            name="name"
            value={user.name}
            onChange={handleChange}
            placeholder="Full Name"
          />

          <label>Email</label>
          <input type="email" value={user.email} disabled />

          <label>Password</label>
          <input
            type="password"
            name="password"
            value={user.password}
            onChange={handleChange}
            placeholder="Password"
          />

          <button type="button" className="btn-save" onClick={handleSave}>
            Save Changes
          </button>
        </form>
      </main>
    </div>
  );
}
