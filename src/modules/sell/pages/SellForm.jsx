import React, { useState } from "react";
import { useProducts } from "../../products/context/ProductContext";
import "./sell.css";


export default function SellForm() {
  const { addProduct } = useProducts();
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [desc, setDesc] = useState("");
  const [image, setImage] = useState(null);
  const [loading, setLoading] = useState(false);

  function submit(e) {
    e.preventDefault();
    if (!title || !price || !image) return alert("Please enter title, price, and upload an image.");
    setLoading(true);

    // Convert uploaded file to URL for demo purposes
    const reader = new FileReader();
    reader.onloadend = () => {
      addProduct({
        title,
        price: Number(price),
        description: desc,
        image: reader.result, // base64 image
        rating: 0,
        badges: [],
      });

      setLoading(false);
      alert("Product listed successfully!");
      setTitle("");
      setPrice("");
      setDesc("");
      setImage(null);
    };

    reader.readAsDataURL(image);
  }

  return (
    <main className="sell-container">
      <h2>Sell an Item</h2>
      <form onSubmit={submit} className="sell-form">
        <input
          placeholder="Product title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <input
          placeholder="Price"
          type="number"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          required
        />
        <textarea
          placeholder="Description"
          value={desc}
          onChange={(e) => setDesc(e.target.value)}
          rows="6"
        />
        <input
          type="file"
          accept="image/*"
          onChange={(e) => setImage(e.target.files[0])}
          required
        />
        <button className="btn" type="submit" disabled={loading}>
          {loading ? "Listing..." : "List Product"}
        </button>
      </form>
    </main>
  );
}
