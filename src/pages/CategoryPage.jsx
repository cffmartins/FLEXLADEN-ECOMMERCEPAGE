import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
//importing components
import ProductCard from "../components/ProductCard";
import Button from "../components/Button";
// importing styles
import "../styles/categorypage/categorypage.scss";
import "../styles/button/button.scss";

// Define category families and their respective categories
const categoryFamilies = {
  fashion: [
    "mens-shirts",
    "mens-shoes",
    "mens-watches",
    "womens-bags",
    "womens-dresses",
    "womens-jewellery",
    "womens-shoes",
    "womens-watches",
    "tops",
    "sunglasses",
  ],
  home: ["furniture", "home-decoration", "kitchen-accessories", "groceries"],
  technology: ["laptops", "smartphones", "mobile-accessories", "tablets"],
  "beauty care": ["fragrances", "beauty", "skin-care"],
  others: ["motorcycle", "sports-accessories", "vehicle"],
};

// Main CategoryPage component
function CategoryPage({ favoriteIds, toggleFavorite }) {
  const [categories, setCategories] = useState([]);
  const [openFamilies, setOpenFamilies] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("https://dummyjson.com/products/category-list")
      .then((res) => res.json())
      .then((data) => setCategories(data))
      .catch((err) => console.error(err));
  }, []);

  useEffect(() => {
    if (selectedCategory) {
      fetch(`https://dummyjson.com/products/category/${selectedCategory}`)
        .then((res) => res.json())
        .then((data) => setProducts(data.products))
        .catch((err) => console.error(err));
    } else {
      setProducts([]);
    }
  }, [selectedCategory]);

  // Toggle the visibility of category families in the sidebar
  const toggleFamily = (family) => {
    if (openFamilies.includes(family)) {
      setOpenFamilies(openFamilies.filter((f) => f !== family));
    } else {
      setOpenFamilies([...openFamilies, family]);
    }
  };

  const handleSelectCategory = (cat) => {
    setSelectedCategory(cat);
  };

  const goToProductPage = (productId) => {
    navigate(`/product/${productId}`);
  };

  return (
    <div className="category-page-2cols">
      <aside className="category-sidebar">
        <nav className="category-menu">
          {Object.entries(categoryFamilies).map(([family, cats]) => (
            <div key={family} className="category-menu__group">
              <button
                className={`category-menu__parent ${
                  openFamilies.includes(family) ? "open" : ""
                }`}
                onClick={() => toggleFamily(family)}
                type="button"
              >
                {family.charAt(0).toUpperCase() + family.slice(1)}
                <span className="category-arrow">
                  {openFamilies.includes(family) ? "▲" : "▼"}
                </span>
              </button>
              {openFamilies.includes(family) && (
                <ul className="category-menu__sub">
                  {cats.map(
                    (cat) =>
                      categories.includes(cat) && (
                        <li
                          key={cat}
                          className={`category-menu__subitem ${
                            selectedCategory === cat ? "selected" : ""
                          }`}
                          onClick={() => handleSelectCategory(cat)}
                        >
                          {cat}
                        </li>
                      )
                  )}
                </ul>
              )}
            </div>
          ))}
        </nav>
      </aside>
      <main className="product-area">
        <h2 className="product-area__title">
          {selectedCategory
            ? `Dance through categories and shop!`
            : "What's catching your cart today?"}
        </h2>
        {products.length > 0 ? (
          <div className="grid-4-row">
            {products.map((product) => (
              <div
                key={product.id}
                className="product-card-wrapper"
                onClick={() => goToProductPage(product.id)}
                style={{ cursor: "pointer" }}
              >
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
          <p>Choose a category to discover amazing products!</p>
        )}
      </main>
    </div>
  );
}

export default CategoryPage;
