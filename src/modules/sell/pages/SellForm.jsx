import React, { useState } from "react";

export default function SellForm() {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [desc, setDesc] = useState("");
  const [loading, setLoading] = useState(false);

  function submit(e) {
    e.preventDefault();
    if (!title || !price) return alert("Please enter title and price.");
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      alert("Product listed (demo). We'll add persistence later.");
      setTitle(""); setPrice(""); setDesc("");
    }, 800);
  }

  return (
    <main className="container" style={{ paddingTop: 18 }}>
      <h2>Sell an item</h2>
      <form onSubmit={submit} style={{ maxWidth: 760, display: "grid", gap: 10 }}>
        <input placeholder="Product title" value={title} onChange={e => setTitle(e.target.value)} required />
        <input placeholder="Price" type="number" value={price} onChange={e => setPrice(e.target.value)} required />
        <textarea placeholder="Description" value={desc} onChange={e => setDesc(e.target.value)} rows="6" />
        <div>
          <button className="btn" type="submit" disabled={loading}>{loading ? "Listing..." : "List product"}</button>
        </div>
      </form>
    </main>
  );
}
