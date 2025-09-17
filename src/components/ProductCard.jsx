// importing necessary hooks and functions
import React from "react";
import { useNavigate } from "react-router-dom";
// importing icons for favorite and cart functionality
import {
  IconHeart,
  IconHeartFilled,
  IconShoppingCart,
} from "@tabler/icons-react";
// importing styles
import "../styles/productcard/productcard.scss";

const ProductCard = ({
  product,
  variant = "default",
  favoriteIds = [],
  toggleFavorite,
  enableNavigation = true,
  detailed = true,
  showCartIcon = false,
  onAddToCart,
  onlyImage = false,
}) => {
  const navigate = useNavigate();
  const isFavorite = favoriteIds.includes(product.id);

  // navigation to product page only if enableNavigation is true
  const handleCardClick = () => {
    if (!enableNavigation) return;
    navigate(`/productpage/${product.id}`);
  };

  // prevent navigation when clicking on heart and toggle favorite status
  const handleFavoriteClick = (e) => {
    e.stopPropagation();
    if (typeof toggleFavorite === "function") {
      toggleFavorite(product.id);
    }
  };

  const handleCartClick = (e) => {
    e.stopPropagation();
    if (typeof onAddToCart === "function") {
      onAddToCart(product);
    }
  };

  return (
    <div
      className={`product-card product-card--${variant} ${
        detailed ? "product-card--detailed" : ""
      }`}
      onClick={handleCardClick}
      style={{
        cursor: enableNavigation ? "pointer" : "default",
        position: "relative",
      }}
    >
      {showCartIcon && (
        <button
          type="button"
          className="cart-button"
          onClick={handleCartClick}
          aria-label="Add to cart!"
          style={{
            position: "absolute",
            top: 10,
            left: 10,
            background: "transparent",
            border: "none",
            cursor: "pointer",
          }}
        >
          <IconShoppingCart color="#666" size={24} />
        </button>
      )}

      {onlyImage ? (
        <img src={product.thumbnail} alt={product.title} />
      ) : variant === "default" ? (
        <>
          {detailed && <h3>{product.title}</h3>}
          <img src={product.thumbnail} alt={product.title} />
          <p>{product.description}</p>
          {detailed && <p className="price">${product.price}</p>}
        </>
      ) : variant === "simple" ? (
        <>
          <img src={product.thumbnail} alt={product.title} />
          <h3>{product.title}</h3>
          <p>${product.price}</p>
        </>
      ) : null}

      {toggleFavorite && (
        <button
          type="button"
          className="favorite-button"
          onClick={handleFavoriteClick}
          aria-label={isFavorite ? "Remove from favorites" : "Add to favorites"}
          style={{
            position: "absolute",
            top: 10,
            right: 10,
            background: "transparent",
            border: "none",
            cursor: "pointer",
          }}
        >
          {isFavorite ? (
            <IconHeartFilled color="red" size={24} />
          ) : (
            <IconHeart color="gray" size={24} />
          )}
        </button>
      )}
    </div>
  );
};

export default ProductCard;
