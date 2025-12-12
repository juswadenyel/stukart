// src/modules/cart/pages/Cart.jsx
import React from "react";
import { useCart } from "../context/CartContext";
import "./cart.css";

export default function Cart() {
  const { items, update, remove, clear } = useCart();

  // Fixed subtotal calculation
  const subtotal = items.reduce((s, i) => s + i.price * i.qty, 0);
  const shipping = subtotal > 0 ? Math.min(20, subtotal * 0.05) : 0;
  const tax = subtotal * 0.12;
  const total = subtotal + shipping + tax;

  return (
    <main style={{ padding: 24, minHeight: "100vh", backgroundColor: "#0b1b3a" }}>
      <h2 style={{ color: "#f5f6fa" }}>Your Cart</h2>

      {items.length === 0 ? (
        <div style={{ marginTop: 12, color: "rgba(245,246,250,0.7)" }}>
          Your cart is empty.
        </div>
      ) : (
        <div style={{ display: "grid", gridTemplateColumns: "1fr 320px", gap: 18 }}>
          <div>
            {items.map((item) => (
              <div
                key={item.id}
                className="cart-item"
                style={{
                  background: "#1e2b4d",
                  padding: 12,
                  borderRadius: 12,
                  display: "flex",
                  gap: 12,
                  alignItems: "center",
                  marginBottom: 12,
                }}
              >
                {/* Product image */}
                <img
                  src={item.image} // Use the product image
                  alt={item.title}
                  style={{
                    width: 86,
                    height: 86,
                    borderRadius: 10,
                    objectFit: "cover",
                  }}
                />

                <div style={{ flex: 1 }}>
                  <div style={{ fontWeight: 700, color: "#f5f6fa" }}>{item.title}</div>
                  <div style={{ fontSize: 14, color: "rgba(245,246,250,0.7)" }}>
                    ${item.price.toFixed(2)}
                  </div>
                </div>

                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "flex-end",
                    gap: 8,
                  }}
                >
                  <input
                    type="number"
                    min="1"
                    max="99"
                    value={item.qty || 1} // controlled input
                    onChange={(e) => update(item.id, Number(e.target.value) || 1)}
                    style={{ width: 64, padding: 6, borderRadius: 8 }}
                  />
                  <div style={{ fontWeight: 700, color: "#f5f6fa" }}>
                    ${(item.price * item.qty).toFixed(2)}
                  </div>
                  <button
                    className="btn ghost"
                    onClick={() => remove(item.id)}
                    style={{ padding: "6px 8px", borderColor: "#7c5cff", color: "#f5f6fa" }}
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}
          </div>

          <aside
            style={{
              background: "#1e2b4d",
              padding: 16,
              borderRadius: 12,
              color: "#f5f6fa",
              display: "flex",
              flexDirection: "column",
              gap: 8,
            }}
          >
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <div>Subtotal</div>
              <div>${subtotal.toFixed(2)}</div>
            </div>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <div>Shipping</div>
              <div>${shipping.toFixed(2)}</div>
            </div>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <div>Tax</div>
              <div>${tax.toFixed(2)}</div>
            </div>
            <hr style={{ border: "none", height: 1, background: "#7c5cff", margin: "12px 0" }} />
            <div style={{ display: "flex", justifyContent: "space-between", fontWeight: 700 }}>
              <div>Total</div>
              <div>${total.toFixed(2)}</div>
            </div>
            <div style={{ marginTop: 12, display: "flex", gap: 8 }}>
              <button
                className="btn"
                style={{ flex: 1, background: "#1e3a8a", color: "#fff", padding: "10px 0", borderRadius: 8 }}
                onClick={() => alert("Checkout flow - not implemented yet")}
              >
                Checkout
              </button>
              <button
                className="btn ghost"
                style={{ flex: 1, border: "1px solid #7c5cff", color: "#f5f6fa", borderRadius: 8 }}
                onClick={clear}
              >
                Clear
              </button>
            </div>
          </aside>
        </div>
      )}
    </main>
  );
}
