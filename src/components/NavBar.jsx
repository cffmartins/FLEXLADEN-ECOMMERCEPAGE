// importing necessary libraries and hooks
import React, { useState, useRef } from "react";
import { NavLink, Link } from "react-router-dom";
// import logo and icons
import logoBlack from "../assets/logos/type_black.png";
import { IconShoppingCart, IconUser, IconSearch } from "@tabler/icons-react";
// import styles
import "../styles/navbar/navbar.scss";

function NavBar() {
  const [showMobileSearch, setShowMobileSearch] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const debounceRef = useRef(null);

  const handleSearch = (query) => {
    const trimmedQuery = query.trim();
    if (!trimmedQuery) {
      setSearchResults([]);
      return;
    }

    fetch(
      `https://dummyjson.com/products/search?q=${encodeURIComponent(
        trimmedQuery
      )}`
    )
      .then((res) => res.json())
      .then((data) => {
        setSearchResults(data.products || []);
      })
      .catch(() => {
        setSearchResults([]);
      });
  };

  const handleInputChange = (e) => {
    const value = e.target.value;
    setSearchTerm(value);

    if (debounceRef.current) {
      clearTimeout(debounceRef.current);
    }
    debounceRef.current = setTimeout(() => {
      handleSearch(value);
    }, 350);
  };

  const handleClearSearch = () => {
    setSearchTerm("");
    setSearchResults([]);
    setShowMobileSearch(false);
  };

  return (
    <>
      {showMobileSearch && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100vw",
            height: "100vh",
            zIndex: 1000,
            background: "transparent",
          }}
          onClick={handleClearSearch}
        />
      )}
      <nav className="navbar">
        <div className="NavBarLeft">
          <Link to="/home" className="NavBarLeftLogo">
            <img src={logoBlack} alt="Home" />
          </Link>
          <NavLink
            to="/categorypage"
            className={({ isActive }) => (isActive ? "active-link" : undefined)}
          >
            Shop
          </NavLink>
          <NavLink
            to="/favorites"
            className={({ isActive }) => (isActive ? "active-link" : undefined)}
          >
            Favorites
          </NavLink>
        </div>
        <div className="NavBarCenter" style={{ position: "relative" }}>
          <input
            type="text"
            className={`NavBarCenterSearch${showMobileSearch ? " show" : ""}`}
            placeholder="Search"
            value={searchTerm}
            onChange={handleInputChange}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                handleSearch(searchTerm);
              }
            }}
            style={{ display: showMobileSearch ? "block" : undefined }}
          />
          <button
            className="NavBarCenterSearchIcon"
            aria-label="Open search"
            type="button"
            onClick={() => {
              setShowMobileSearch((v) => !v);
              if (showMobileSearch && searchTerm.trim()) {
                handleSearch(searchTerm);
              } else {
                setSearchResults([]);
              }
            }}
          >
            <IconSearch size={20} color="#000" />
          </button>
          {searchResults.length > 0 && (
            <ul
              className="search-results-list"
              style={{
                position: "absolute",
                top: "100%",
                left: 0,
                right: 0,
                background: "#fff",
                maxHeight: "300px",
                overflowY: "auto",
                boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
                zIndex: 2000,
                marginTop: "4px",
                padding: "0",
                listStyle: "none",
              }}
            >
              {searchResults.map((product) => (
                <li
                  key={product.id}
                  style={{
                    padding: "5px",
                    borderBottom: "1px solid #eee",
                    cursor: "pointer",
                    fontFamily: "Satoshi, Arial, sans-serif",
                    textAlign: "center",
                  }}
                  onClick={() => {
                    setSearchResults([]);
                    setSearchTerm("");
                    setShowMobileSearch(false);
                  }}
                >
                  <Link
                    to={`/productpage/${product.id}`}
                    style={{ textDecoration: "none", color: "#333" }}
                  >
                    {product.title}
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </div>
        <div className="NavBarRight">
          <NavLink
            to="/cartpage"
            className={({ isActive }) => (isActive ? "active-link" : undefined)}
            aria-label="Cart"
          >
            {({ isActive }) => (
              <IconShoppingCart
                size={20}
                stroke={isActive ? "#fff" : "#000"}
                strokeWidth={2.5}
                fill="none"
                className="NavBarRighticon"
              />
            )}
          </NavLink>
          <NavLink
            to="/profile"
            className={({ isActive }) => (isActive ? "active-link" : undefined)}
            aria-label="Profile"
          >
            {({ isActive }) => (
              <IconUser
                size={20}
                stroke={isActive ? "#fff" : "#000"}
                strokeWidth={2.5}
                fill="none"
                className="NavBarRight__icon"
              />
            )}
          </NavLink>
        </div>
      </nav>
    </>
  );
}

export default NavBar;
