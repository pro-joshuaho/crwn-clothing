import React from "react";
import "./cart-item.styles.scss";

const CartItem = ({ imageUrl, name, quantity, price }) => (
  <div className="cart-item">
    <div className="cart-item-img">
      <img src={imageUrl} alt="item"></img>
    </div>
    <div className="cart-item-text">
      <span>{name}</span>
      <span>{`${quantity} x $${price}`}</span>
    </div>
  </div>
);

export default CartItem;
