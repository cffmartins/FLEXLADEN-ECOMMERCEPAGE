import React from "react";
import { useNavigate } from "react-router-dom";
import { IconHeart, IconHeartFilled } from "@tabler/icons-react";
import "../styles/productcard/productcard.scss";

const ProductCard = ({
  product,
  variant = "default",
  favoriteIds = [],
  toggleFavorite,
}) => {
  const navigate = useNavigate();
  const isFavorite = favoriteIds.includes(product.id);

  const handleCardClick = () => {
    navigate(`/productpage/${product.id}`);
  };

  const handleFavoriteClick = (e) => {
    e.stopPropagation(); // previne navegação ao clicar no coração
    if (typeof toggleFavorite === "function") {
      toggleFavorite(product.id);
    }
  };

  return (
    <div
      className={`product-card product-card--${variant}`}
      onClick={handleCardClick}
      style={{ cursor: "pointer", position: "relative" }} // relative para posicionar botão favorito
    >
      {variant === "default" && (
        <>
          <img src={product.thumbnail} alt={product.title} />
          <p>{product.description}</p>
        </>
      )}
      {variant === "simple" && (
        <>
          <img src={product.thumbnail} alt={product.title} />
          <h3>{product.title}</h3>
          <p>${product.price}</p>
        </>
      )}
      {toggleFavorite && (
        <button
          type="button"
          className="favorite-button"
          onClick={handleFavoriteClick}
          aria-label={
            isFavorite ? "Remover dos favoritos" : "Adicionar aos favoritos"
          }
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
