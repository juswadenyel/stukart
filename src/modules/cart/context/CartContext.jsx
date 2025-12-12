// src/modules/cart/context/CartContext.jsx
import React, { createContext, useContext, useState } from "react";

// Create CartContext
export const CartContext = createContext();

// Provider
export function CartProvider({ children }) {
  const [items, setItems] = useState([]);

  const addToCart = (product) => {
    setItems((prev) => {
      const exists = prev.find((i) => i.id === product.id);
      if (exists) {
        return prev.map((i) =>
          i.id === product.id ? { ...i, qty: i.qty + 1 } : i
        );
      }
      return [...prev, { ...product, qty: 1 }];
    });
  };

  const update = (id, qty) =>
    setItems((prev) =>
      prev.map((i) => (i.id === id ? { ...i, qty } : i))
    );

  const remove = (id) => setItems((prev) => prev.filter((i) => i.id !== id));

  const clear = () => setItems([]);

  return (
    <CartContext.Provider value={{ items, addToCart, update, remove, clear }}>
      {children}
    </CartContext.Provider>
  );
}

// Optional hook
export const useCart = () => useContext(CartContext);
