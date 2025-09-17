// importing react and necessary hooks
import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
// importing the ApiContext to access the fetched data
import ApiContext from "../context/ApiContext";
// importing the ProductCard component
import ProductCard from "./ProductCard";
//importing Button
import Button from "./Button";
// importing styles
import "../styles/topselling/topselling.scss";
import "../styles/button/button.scss";

const TopSelling = ({ favoriteIds, toggleFavorite }) => {
  const { data, loading } = useContext(ApiContext);
  const navigate = useNavigate();

  if (loading) return <p>Sorry, I'm sleepy</p>;

  // show 4 products from the fetched data
  const productsToShow = data.slice(4, 8);

  const handleViewAll = () => {
    navigate("/categorypage");
  };

  return (
    <div className="topselling-container">
      <h1>TOP SELLING</h1>
      <div className="grid-4-row">
        {productsToShow.map((product) => (
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
      <button className="btn view-all-btn" onClick={handleViewAll}>
        View All
      </button>
    </div>
  );
};

export default TopSelling;
