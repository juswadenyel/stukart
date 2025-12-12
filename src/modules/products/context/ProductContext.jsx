import React, { createContext, useState, useContext } from "react";
import PRODUCTS from "../data/products";

const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState(PRODUCTS);

  const addProduct = (product) => {
    setProducts((prev) => [
      ...prev,
      { ...product, id: `p-${Date.now()}` }, // generate unique id
    ]);
  };

  return (
    <ProductContext.Provider value={{ products, addProduct }}>
      {children}
    </ProductContext.Provider>
  );
};

// Hook to use the context easily
export const useProducts = () => useContext(ProductContext);
