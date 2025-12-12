import React from "react";
import { useCart } from "../context/CartContext";
import "./cart.css";

export default function Cart() {
  const { items, update, remove, clear } = useCart();

  const subtotal = items.reduce((s, i) => s + i.product.price * i.qty, 0);
  const shipping = subtotal > 0 ? Math.min(20, subtotal * 0.05) : 0;
  const tax = subtotal * 0.12;
  const total = subtotal + shipping + tax;

  return (
    <main className="container" style={{ paddingTop: 18 }}>
      <h2>Your Cart</h2>
      {items.length === 0 ? (
        <div className="muted" style={{ marginTop: 12 }}>Your cart is empty.</div>
      ) : (
        <div style={{ display: "grid", gridTemplateColumns: "1fr 320px", gap: 18 }}>
          <div>
            {items.map(item => (
              <div className="cart-item" key={item.id}>
                <div className="thumb" aria-hidden style={{ background: "linear-gradient(135deg,#00d1ff,#7c5cff)", width: 86, height: 86, borderRadius: 10 }} />
                <div style={{ flex: 1 }}>
                  <div style={{ fontWeight: 700 }}>{item.product.title}</div>
                  <div className="muted small">${item.product.price.toFixed(2)}</div>
                </div>
                <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-end", gap: 8 }}>
                  <input type="number" min="1" max="99" value={item.qty} onChange={e => update(item.id, Number(e.target.value) || 1)} style={{ width: 64, padding: 6, borderRadius: 8 }} />
                  <div style={{ fontWeight: 700 }}>${(item.product.price * item.qty).toFixed(2)}</div>
                  <button className="btn ghost" onClick={() => remove(item.id)} style={{ padding: "6px 8px" }}>Remove</button>
                </div>
              </div>
            ))}
          </div>

          <aside style={{ background: "linear-gradient(180deg, rgba(255,255,255,0.02), rgba(0,0,0,0.03))", padding: 16, borderRadius: 12 }}>
            <div style={{ display: "flex", justifyContent: "space-between" }}><div className="muted">Subtotal</div><div>${subtotal.toFixed(2)}</div></div>
            <div style={{ display: "flex", justifyContent: "space-between" }}><div className="muted">Shipping</div><div>${shipping.toFixed(2)}</div></div>
            <div style={{ display: "flex", justifyContent: "space-between" }}><div className="muted">Tax</div><div>${tax.toFixed(2)}</div></div>
            <hr style={{ border: "none", height: 1, background: "rgba(255,255,255,0.03)", margin: "12px 0" }} />
            <div style={{ display: "flex", justifyContent: "space-between", fontWeight: 700 }}><div>Total</div><div>${total.toFixed(2)}</div></div>
            <div style={{ marginTop: 12 }}>
              <button className="btn" onClick={() => alert("Checkout flow - not implemented yet")}>Checkout</button>
              <button className="btn ghost" onClick={clear} style={{ marginLeft: 8 }}>Clear</button>
            </div>
          </aside>
        </div>
      )}
    </main>
  );
}
