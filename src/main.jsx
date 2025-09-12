//mandatory imports
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router";

//styles imports
import "../src/styles/main.css";

//homepage import
import HomePage from "./pages/HomePage";
import FavoritesPage from "./pages/FavoritesPage";
import CategoryPage from "./pages/CategoryPage";
import ProductPage from "./pages/ProductPage";
import CartPage from "./pages/CartPage";
import ProfilePage from "./pages/ProfilePage";
//navbar import
import NavBar from "./components/NavBar";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <div className="vertical-lines"></div>
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
  </StrictMode>
);
