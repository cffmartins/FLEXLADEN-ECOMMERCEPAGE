// importing necessary libraries and components
import React, { useEffect, useState } from "react";
import Button from "../components/Button";
// icon for delete action
import { MdDelete } from "react-icons/md";
//importing styles
import "../styles/cartpage/CartPage.scss";

function CartPage() {
  const [cartItems, setCartItems] = useState([]);
  const [quantities, setQuantities] = useState({});
  const deliveryFee = 5;

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCartItems(storedCart);

    const initialQuantities = {};
    storedCart.forEach((item) => {
      initialQuantities[item.id] = 1;
    });
    setQuantities(initialQuantities);
  }, []);

  const handleQuantity = (id, delta) => {
    setQuantities((q) => ({
      ...q,
      [id]: Math.max(1, (q[id] || 1) + delta),
    }));
  };

  const handleRemove = (id) => {
    setCartItems((items) => {
      const newCart = items.filter((item) => item.id !== id);
      localStorage.setItem("cart", JSON.stringify(newCart));
      return newCart;
    });
    setQuantities((q) => {
      const newQ = { ...q };
      delete newQ[id];
      return newQ;
    });
  };

  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.price * (quantities[item.id] || 1),
    0
  );

  const discountLevels = [
    { threshold: 3000, discount: 30 },
    { threshold: 1000, discount: 20 },
    { threshold: 500, discount: 10 },
    { threshold: 100, discount: 5 },
  ];

  function calculateDiscounts(subtotal) {
    let appliedDiscount = 0;
    let nextThreshold = 0;
    let nextDiscount = 0;

    for (let i = 0; i < discountLevels.length; i++) {
      if (subtotal > discountLevels[i].threshold) {
        appliedDiscount = discountLevels[i].discount;
        if (i > 0) {
          nextThreshold = discountLevels[i - 1].threshold;
          nextDiscount = discountLevels[i - 1].discount;
        }
        break;
      }
    }

    if (appliedDiscount === 0) {
      nextThreshold = discountLevels[discountLevels.length - 1].threshold;
      nextDiscount = discountLevels[discountLevels.length - 1].discount;
    }

    return { appliedDiscount, nextThreshold, nextDiscount };
  }

  const { appliedDiscount, nextThreshold, nextDiscount } =
    calculateDiscounts(subtotal);

  const discountPercent = appliedDiscount / 100;
  const discountAmount = -(subtotal * discountPercent);
  const total = subtotal + discountAmount + deliveryFee;

  const amountNeeded = nextThreshold > 0 ? nextThreshold - subtotal : 0;

  return (
    <div className="cart-main-wrapper">
      <h1 className="cart-title">YOUR CART</h1>
      <div className="cart-grid">
        <div className="cart-items-list">
          {cartItems.length === 0 ? (
            <p className="empty-cart">Your cart is empty. 😭</p>
          ) : (
            cartItems.map((item) => (
              <div className="cart-item-card" key={item.id}>
                <img src={item.thumbnail} alt={item.title} />
                <div className="cart-item-info">
                  <div className="cart-item-title-row">
                    <h3>{item.title}</h3>
                    <button
                      className="cart-remove-btn"
                      onClick={() => handleRemove(item.id)}
                      aria-label="Remove"
                    >
                      <MdDelete size={20} />
                    </button>
                  </div>
                  <div className="cart-price-row">
                    <span>${item.price}</span>
                    <div className="cart-quantity-control">
                      <button
                        onClick={() => handleQuantity(item.id, -1)}
                        disabled={quantities[item.id] === 1}
                      >
                        -
                      </button>
                      <span>{quantities[item.id]}</span>
                      <button onClick={() => handleQuantity(item.id, 1)}>
                        +
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))
          )}
          {cartItems.length > 0 && amountNeeded > 0 && (
            <p className="next-discount-note">
              You need ${amountNeeded.toFixed(2)} more to get a {nextDiscount}%
              discount.
            </p>
          )}
        </div>
        <div className="cart-order-summary">
          <h2>Order Summary</h2>
          <div className="summary-row">
            <span>Subtotal</span>
            <span>${subtotal.toFixed(2)}</span>
          </div>
          <div className="summary-row">
            <span>Discount (-{appliedDiscount}%)</span>
            <span style={{ color: "#009975" }}>
              {discountAmount ? `$${discountAmount.toFixed(2)}` : "–"}
            </span>
          </div>
          <div className="summary-row">
            <span>Delivery Fee</span>
            <span>${deliveryFee.toFixed(2)}</span>
          </div>
          <div className="summary-row summary-total">
            <span>Total</span>
            <span>${total.toFixed(2)}</span>
          </div>
          <Button className="cart-checkout-btn">Go to Checkout</Button>
        </div>
      </div>
    </div>
  );
}

export default CartPage;
