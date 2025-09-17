// import React, { useState, useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useEffect, useState } from "react";
// import necessary hooks
import ApiProvider from "./context/ApiProvider";
// import components and pages
import ScrollToTop from "./components/ScrollToTop";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import FavoritesPage from "./pages/FavoritesPage";
import CategoryPage from "./pages/CategoryPage";
import ProductPage from "./pages/ProductPage";
import CartPage from "./pages/CartPage";
import ProfilePage from "./pages/ProfilePage";

function App() {
  const [favoriteIds, setFavoriteIds] = useState(() => {
    const saved = localStorage.getItem("favoriteIds");
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem("favoriteIds", JSON.stringify(favoriteIds));
  }, [favoriteIds]);

  const toggleFavorite = (id) => {
    setFavoriteIds((current) =>
      current.includes(id)
        ? current.filter((favId) => favId !== id)
        : [...current, id]
    );
  };

  return (
    <ApiProvider>
      <BrowserRouter>
        <ScrollToTop />
        <NavBar />
        <Routes>
          <Route
            path="/"
            element={
              <HomePage
                favoriteIds={favoriteIds}
                toggleFavorite={toggleFavorite}
              />
            }
          />
          <Route
            path="/home"
            element={
              <HomePage
                favoriteIds={favoriteIds}
                toggleFavorite={toggleFavorite}
              />
            }
          />
          <Route
            path="/categorypage"
            element={
              <CategoryPage
                favoriteIds={favoriteIds}
                toggleFavorite={toggleFavorite}
              />
            }
          />
          <Route
            path="/favorites"
            element={
              <FavoritesPage
                favoriteIds={favoriteIds}
                toggleFavorite={toggleFavorite}
              />
            }
          />
          <Route
            path="/productpage/:productId"
            element={
              <ProductPage
                favoriteIds={favoriteIds}
                toggleFavorite={toggleFavorite}
              />
            }
          />
          <Route path="/cartpage" element={<CartPage />} />
          <Route path="/profile" element={<ProfilePage />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </ApiProvider>
  );
}

export default App;
