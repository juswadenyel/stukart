import React, { useMemo, useState, useContext } from "react";
import ProductGrid from "../components/ProductGrid";
import { useProducts } from "../context/ProductContext";
import { CartContext } from "../../cart/context/CartContext";

export default function ProductList() {
  const { addToCart } = useContext(CartContext);
  const { products } = useProducts(); // get dynamic products
  const [q, setQ] = useState("");

  const filtered = useMemo(() => {
    const low = q.trim().toLowerCase();
    if (!low) return products;
    return products.filter(
      (p) =>
        p.title.toLowerCase().includes(low) ||
        p.description.toLowerCase().includes(low)
    );
  }, [q, products]);

  return (
    <main className="container" style={{ paddingTop: 18 }}>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: 12,
          flexWrap: "wrap",
          gap: 12,
        }}
      >
        <h2 style={{ color: "#f5f6fa" }}>Products</h2>
        <input
          placeholder="Search products..."
          value={q}
          onChange={(e) => setQ(e.target.value)}
          style={{
            padding: "10px 14px",
            borderRadius: "var(--radius)",
            border: "1px solid rgba(255,255,255,0.06)",
            background: "var(--panel)",
            color: "#e6eef6",
            minWidth: 200,
            fontSize: "14px",
            transition: "border-color 0.2s ease",
          }}
          onFocus={(e) => (e.target.style.borderColor = "var(--accent-start)")}
          onBlur={(e) => (e.target.style.borderColor = "rgba(255,255,255,0.06)")}
        />
      </div>

      <ProductGrid products={filtered} addToCart={addToCart} />
    </main>
  );
}
