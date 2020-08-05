import React from "react";
import "./checkout.styles.scss";

import { connect } from "react-redux";
import {
  decreaseItem,
  addItem,
  removeItem,
} from "../../redux/cart/cart.action";

const CheckoutItem = ({ item, dispatch }) => {
  const { imageUrl, price, quantity, name } = item;
  return (
    <div className="checkout-item">
      <div className="item-image normal">
        <img src={imageUrl}></img>
      </div>
      <div className="item-description normal">{name}</div>
      <div className="item-quantity normal">
        <span
          className="item-increase"
          onClick={() => {
            dispatch(decreaseItem(item));
          }}
        >
          &#10094;
        </span>
        {quantity}
        <span
          className="item-increase"
          onClick={() => {
            dispatch(addItem(item));
          }}
        >
          &#10095;
        </span>
      </div>
      <div className="item-price normal">{price}</div>
      <div
        className="item-remove remove"
        onClick={() => dispatch(removeItem(item))}
      >
        &#10005;
      </div>
    </div>
  );
};

export default connect(null)(CheckoutItem);
