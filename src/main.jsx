//mandatory imports
import React from "react";
import ReactDOM from "react-dom/client";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";

// importing API context
import ApiProvider from "./context/ApiProvider";

//styles imports
import "../src/styles/main.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

//homepage import
import HomePage from "./pages/HomePage";
import FavoritesPage from "./pages/FavoritesPage";
import CategoryPage from "./pages/CategoryPage";
import ProductPage from "./pages/ProductPage";
import CartPage from "./pages/CartPage";
import ProfilePage from "./pages/ProfilePage";
//navbar import
import NavBar from "./components/NavBar";
//slider import
import SliderComponent from "./components/SliderComponent";
//top selling import
import TopSelling from "./components/TopSelling";
//comments section import
import CommentsSection from "./components/CommentsSection";

// rendering the app
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ApiProvider>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/home" element={<HomePage />} />
          <Route path="/categorypage" element={<CategoryPage />} />
          <Route path="/favorites" element={<FavoritesPage />} />
          <Route path="/productpage" element={<ProductPage />} />
          <Route path="/cartpage" element={<CartPage />} />
          <Route path="/profile" element={<ProfilePage />} />
        </Routes>
      </BrowserRouter>
    </ApiProvider>
  </StrictMode>
);
