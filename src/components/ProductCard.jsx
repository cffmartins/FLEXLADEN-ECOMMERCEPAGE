import React from "react";
import { Link } from "react-router-dom";
import "../styles/productcard/productcard.scss";

const ProductCard = ({ product, variant = "default" }) => {
  return (
    <Link
      to={`/productpage/${product.id}`}
      className={`product-card product-card--${variant}`}
    >
      {variant === "default" && (
        <>
          <img src={product.thumbnail} alt={product.title} />
          <p>{product.description}</p>
        </>
      )}
      {variant === "simple" && (
        <>
          <img src={product.thumbnail} alt="" />
          <h3>{product.title}</h3>
          <p>${product.price}</p>
        </>
      )}
    </Link>
  );
};

export default ProductCard;
