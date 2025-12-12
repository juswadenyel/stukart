import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import Home from "../modules/home/pages/Home";
import ProductList from "../modules/products/pages/ProductList";
import ProductDetail from "../modules/products/pages/ProductDetail";
import CartPage from "../modules/cart/pages/Cart";
import Auth from "../modules/auth/pages/Auth";
import SellForm from "../modules/sell/pages/SellForm";
import Profile from "../modules/profile/pages/Profile";

import Navbar from "../shared/components/Navbar";
import Footer from "../shared/components/Footer";

export default function AppRoutes({ user, setUser }) {
  return (
    <BrowserRouter>
      <Navbar user={user} setUser={setUser} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<ProductList />} />
        <Route path="/product/:id" element={<ProductDetail />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/auth" element={<Auth setUser={setUser} />} />
        <Route path="/sell" element={<SellForm />} />

        {/* Pass setUser to Profile */}
        <Route path="/profile" element={<Profile setUser={setUser} />} />

        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}
