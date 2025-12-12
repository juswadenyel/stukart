import React from "react";
import "./footer.css";

export default function Footer() {
  return (
    <footer className="stk-footer">
      <div className="container" style={{ padding: "18px 0", textAlign: "center" }}>
        <div className="muted">© {new Date().getFullYear()} Stukart — Crafted with care</div>
      </div>
    </footer>
  );
}
