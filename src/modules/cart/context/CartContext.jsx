import React, { createContext, useContext, useEffect, useState } from "react";

const CartContext = createContext();

export function useCart() {
  return useContext(CartContext);
}

export function CartProvider({ children }) {
  const [items, setItems] = useState(() => {
    try {
      const raw = localStorage.getItem("stukart_cart_v1");
      return raw ? JSON.parse(raw) : [];
    } catch {
      return [];
    }
  });

  useEffect(() => {
    try { localStorage.setItem("stukart_cart_v1", JSON.stringify(items)); } catch {}
  }, [items]);

  function add(product, qty = 1) {
    setItems(prev => {
      const copy = [...prev];
      const idx = copy.findIndex(i => i.id === product.id);
      if (idx >= 0) {
        copy[idx].qty = Math.min(99, copy[idx].qty + qty);
      } else {
        copy.push({ id: product.id, qty, product });
      }
      return copy;
    });
  }

  function update(id, qty) {
    setItems(prev => prev.map(it => it.id === id ? { ...it, qty: Math.max(1, Math.min(99, qty)) } : it).filter(i => i.qty > 0));
  }

  function remove(id) {
    setItems(prev => prev.filter(i => i.id !== id));
  }

  function clear() {
    setItems([]);
  }

  return (
    <CartContext.Provider value={{ items, add, update, remove, clear }}>
      {children}
    </CartContext.Provider>
  );
}
