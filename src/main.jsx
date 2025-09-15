// main.jsx

import React from "react";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import App from "./App";

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

// rendering the app
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
