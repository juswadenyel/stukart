import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import { CartProvider } from "./modules/cart/context/CartContext";
import { ProductProvider } from "./modules/products/context/ProductContext";
import "./index.css";


createRoot(document.getElementById("root")).render(
   <React.StrictMode>
    <ProductProvider>
      <CartProvider>
        <App />
      </CartProvider>
    </ProductProvider>
  </React.StrictMode>
);
