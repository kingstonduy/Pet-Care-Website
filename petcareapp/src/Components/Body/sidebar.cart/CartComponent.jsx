import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import "./Cart.module.css";

const CartComponent = ({ isOpen, closeCart }) => {
  return (
    <div className={`cart-component ${isOpen ? "open" : ""}`}>
      <div className="cart-component-header">
        <h3>Cart</h3>
        <button className="close-btn" onClick={closeCart}>
          <FontAwesomeIcon icon={faTimes} />
        </button>
      </div>
      <div className="cart-component-content">
        {/* Display cart items here */}
      </div>
    </div>
  );
};

export default CartComponent;
