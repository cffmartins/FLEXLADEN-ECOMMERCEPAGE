// importing React
import React from "react";
// importing logo and styles
import logoBlack from "../../assets/logos/type_black.png";
import "./footer.scss";

function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer-v4">
      <div className="footer-v4__newsletter">
        <h2>Don't miss out, subscribe!</h2>
        <form className="footer-v4__form">
          <input
            type="email"
            placeholder="Enter your email address"
            className="footer-v4__input"
          />
          <button type="submit" className="footer-v4__button">
            Subscribe!
          </button>
        </form>
      </div>
      <div className="footer-v4__logo">
        <img src={logoBlack} alt="FlexLaden logo" />
      </div>
      <div className="footer-v4__columns">
        <div className="footer-v4__col">
          <h4>Company</h4>
          <ul>
            <li>About</li>
          </ul>
        </div>
        <div className="footer-v4__col">
          <h4>Help</h4>
          <ul>
            <li>Customer Support</li>
            <li>Delivery Details</li>
            <li>Terms & Conditions</li>
            <li>Privacy Policy</li>
          </ul>
        </div>
        <div className="footer-v4__col">
          <h4>FAQ</h4>
          <ul>
            <li>Account</li>
            <li>Manage Deliveries</li>
            <li>Orders</li>
            <li>Payments</li>
          </ul>
        </div>
      </div>
      <div className="footer-v4__bottom">
        <span>FlexLaden © {year}. All Rights Reserved</span>
      </div>
    </footer>
  );
}

export default Footer;
