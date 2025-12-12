import React from "react";
import Hero from "../components/Hero";
import ProductGridPreview from "../../products/components/ProductGrid"; // this grid will render all products
import PRODUCTS from "../../products/data/products";

export default function Home() {
  // pass sample products to the preview grid
  return (
    <main>
      <Hero />
      <div className="container" style={{ marginTop: 18 }}>
        <h2 style={{ marginBottom: 10 }}>Featured products</h2>
        <ProductGridPreview products={PRODUCTS} />
      </div>
    </main>
  );
}
