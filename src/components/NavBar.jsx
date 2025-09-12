// mandatory imports
import { useState } from "react";
import { NavLink, Link } from "react-router-dom";
//import logo and icons
import logoBlack from "../assets/logos/type_black.png";
import { IconShoppingCart, IconUser, IconSearch } from "@tabler/icons-react";
// import styles
import "../styles/navbar/navbar.scss";

function NavBar() {
  const [showMobileSearch, setShowMobileSearch] = useState(false);

  return (
    <>
      {showMobileSearch && (
        <div
          // overlay to close search input when clicking outside
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100vw",
            height: "100vh",
            zIndex: 1000,
            background: "transparent",
          }}
          onClick={() => setShowMobileSearch(false)}
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
        <div className="NavBarCenter">
          <input
            type="text"
            className={`NavBarCenterSearch${showMobileSearch ? " show" : ""}`}
            placeholder="Search"
            style={{ display: showMobileSearch ? "block" : undefined }}
          />
          <button
            className="NavBarCenterSearchIcon"
            aria-label="Open search"
            type="button"
            onClick={() => setShowMobileSearch((v) => !v)}
          >
            <IconSearch size={20} color="#000" />
          </button>
        </div>
        <div className="NavBarRight">
          <NavLink
            to="/cartpage"
            className={({ isActive }) => (isActive ? "active-link" : undefined)}
            aria-label="Cart"
          >
            <IconShoppingCart
              size={20}
              color="#000"
              className="NavBarRighticon"
            />
          </NavLink>
          <NavLink
            to="/profile"
            className={({ isActive }) => (isActive ? "active-link" : undefined)}
            aria-label="Profile"
          >
            <IconUser size={20} color="#000" className="NavBarRight__icon" />
          </NavLink>
        </div>
      </nav>
    </>
  );
}

export default NavBar;
