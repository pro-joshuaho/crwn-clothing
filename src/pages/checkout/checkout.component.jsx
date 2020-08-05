import React from "react";

import {
  selectCartItemsTotalPrice,
  selectCartItems,
} from "../../redux/cart/cart.reselect";

import { createStructuredSelector } from "reselect";
import { connect } from "react-redux";

import CheckoutItem from "../../components/checkout-item/checkout.component";

import "./checkout.styles.scss";

const checkoutPage = ({ totalPrice, cartItems }) => {
  return (
    <div className="checkout-page">
      <div className="checkout-header">
        <div className="header-block">
          <span>Product</span>
        </div>
        <div className="header-block">
          <span>Description</span>
        </div>
        <div className="header-block">
          <span>Quantity</span>
        </div>
        <div className="header-block">
          <span>Price</span>
        </div>
        <div className="header-block">
          <span>Remove</span>
        </div>
      </div>
      <div className="checkout-item-container">
        {cartItems.map((item) => (
          <CheckoutItem item={item} key={item.id} />
        ))}
      </div>
      <div className="total-price">
        <span>{"Total: " + (totalPrice ? `$ ${totalPrice}` : "$ 0")}</span>
      </div>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  totalPrice: selectCartItemsTotalPrice,
  cartItems: selectCartItems,
});
export default connect(mapStateToProps)(checkoutPage);
