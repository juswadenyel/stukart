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
    <main className="cart-main">
      <h2>Your Cart</h2>

      {items.length === 0 ? (
        <div className="cart-empty">
          Your cart is empty.
        </div>
      ) : (
        <div className="cart-grid">
          <div className="cart-items">
            {items.map((item) => (
              <div key={item.id} className="cart-item">
                <img
                  src={item.image}
                  alt={item.title}
                  className="cart-item-image"
                />

                <div className="cart-item-details">
                  <div className="cart-item-title">{item.title}</div>
                  <div className="cart-item-price">${item.price.toFixed(2)}</div>
                </div>

                <div className="cart-item-controls">
                  <input
                    type="number"
                    min="1"
                    max="99"
                    value={item.qty || 1}
                    onChange={(e) => update(item.id, Number(e.target.value) || 1)}
                    className="cart-item-quantity"
                  />
                  <div className="cart-item-total">
                    ${(item.price * item.qty).toFixed(2)}
                  </div>
                  <button
                    className="cart-item-remove"
                    onClick={() => remove(item.id)}
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}
          </div>

          <aside className="cart-summary">
            <div className="cart-summary-row">
              <div>Subtotal</div>
              <div>${subtotal.toFixed(2)}</div>
            </div>
            <div className="cart-summary-row">
              <div>Shipping</div>
              <div>${shipping.toFixed(2)}</div>
            </div>
            <div className="cart-summary-row">
              <div>Tax</div>
              <div>${tax.toFixed(2)}</div>
            </div>
            <hr className="cart-summary-divider" />
            <div className="cart-summary-row cart-summary-total">
              <div>Total</div>
              <div>${total.toFixed(2)}</div>
            </div>
            <div className="cart-summary-buttons">
              <button
                className="cart-checkout-btn"
                onClick={() => alert("Checkout flow - not implemented yet")}
              >
                Checkout
              </button>
              <button
                className="cart-clear-btn"
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
