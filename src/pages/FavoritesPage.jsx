// importing necessary libraries and components
import React, { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";
import "../styles/favoritespage/favoritespage.scss";

function FavoritesPage({ favoriteIds, toggleFavorite }) {
  const [favoriteProducts, setFavoriteProducts] = useState([]);

  useEffect(() => {
    if (favoriteIds.length === 0) {
      setFavoriteProducts([]);
      return;
    }

    Promise.all(
      favoriteIds.map((id) =>
        fetch(`https://dummyjson.com/products/${id}`)
          .then((res) => res.json())
          .catch(() => null)
      )
    ).then((products) => {
      setFavoriteProducts(products.filter((p) => p !== null));
    });
  }, [favoriteIds]);

  return (
    <main className="product-area">
      <h2 className="product-area__title">
        Why keep them in favorites if you can buy them
      </h2>
      {favoriteProducts.length > 0 ? (
        <div className="grid-4-row">
          {favoriteProducts.map((product) => (
            <div key={product.id} className="product-card-wrapper">
              <ProductCard
                product={product}
                variant="simple"
                favoriteIds={favoriteIds}
                toggleFavorite={toggleFavorite}
              />
            </div>
          ))}
        </div>
      ) : (
        <p>Don't let your favorites slip away!</p>
      )}
    </main>
  );
}

export default FavoritesPage;
