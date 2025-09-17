// importing libraries
import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
// importing components
import Button from "../components/Button";
import ProductCard from "../components/ProductCard";
// importing styles
import "../styles/productpage/ProductPage.scss";
// importing toast notification
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function ProductPage({ favoriteIds, toggleFavorite }) {
  const { productId } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);

  // add product to cart in local storage with toast notification
  const handleAddToCart = (item) => {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    cart.push(item);
    localStorage.setItem("cart", JSON.stringify(cart));
    toast.success("Item added to your cart!");
  };

  useEffect(() => {
    fetch(`https://dummyjson.com/products/${productId}`)
      .then((res) => res.json())
      .then((data) => setProduct(data))
      .catch(() => setProduct(null));
  }, [productId]);

  if (!product) {
    return <p>Just wait a few seconds</p>;
  }

  return (
    <>
      <ToastContainer />
      <div className="product-back-btn-wrapper">
        <Button onClick={() => navigate(-1)} aria-label="Voltar">
          ← Back
        </Button>
      </div>
      <div className="product-page">
        <ProductCard
          product={product}
          favoriteIds={favoriteIds}
          toggleFavorite={toggleFavorite}
          enableNavigation={false}
          detailed={true}
          showCartIcon={true}
          onAddToCart={handleAddToCart}
        />
      </div>
    </>
  );
}

export default ProductPage;
