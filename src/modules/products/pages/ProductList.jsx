import React, { useMemo, useState } from "react";
import ProductGrid from "../components/ProductGrid";
import PRODUCTS from "../data/products";

export default function ProductList() {
  const [q, setQ] = useState("");
  const filtered = useMemo(() => {
    const low = q.trim().toLowerCase();
    if (!low) return PRODUCTS;
    return PRODUCTS.filter(p => p.title.toLowerCase().includes(low) || p.description.toLowerCase().includes(low));
  }, [q]);

  return (
    <main className="container" style={{ paddingTop: 18 }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 12 }}>
        <h2>Products</h2>
        <input placeholder="Search products..." value={q} onChange={e => setQ(e.target.value)} style={{ padding: "8px 10px", borderRadius: 8, border: "1px solid rgba(255,255,255,0.03)", background: "transparent", color: "inherit" }} />
      </div>
      <ProductGrid products={filtered} />
    </main>
  );
}
