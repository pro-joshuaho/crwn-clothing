import React from "react";

import CustomButton from "../custom-button/custom-button.component";

import { connect } from "react-redux";

import "./cart-dropdown.styles.scss";
import CartItem from "../cart-item/cart-item.component";

const CartDropdown = ({ cartItems }) => (
  <div className="cart-dropdown">
    <div className="cart-items">
      {cartItems.map((item) => (
        <CartItem key={item.id} {...item}></CartItem>
      ))}
    </div>
    <CustomButton>GO TO CHECKOUT</CustomButton>
  </div>
);

const mapStateToProps = ({ cart: { cartItems } }) => ({
  cartItems: cartItems,
});

export default connect(mapStateToProps)(CartDropdown);
