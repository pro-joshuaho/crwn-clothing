import React from "react";
import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";

import { connect } from "react-redux";

import { toggleCartHidden } from "../../redux/cart/cart.action";

import "./cart-icon.styles.scss";

const CartIcon = ({ toggleCartHidden, cartItems }) => {
  let itemQuantity = 0;
  const itemQuantityFunction = () => {
    cartItems.map((item) => (itemQuantity += item.quantity));
  };
  itemQuantityFunction();
  return (
    <div className="cart-icon" onClick={toggleCartHidden}>
      <ShoppingIcon className="shopping-icon" />
      <span className="item-count">{itemQuantity}</span>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  toggleCartHidden: () => {
    dispatch(toggleCartHidden());
  },
});

const mapStateToProps = ({ cart: { cartItems } }) => ({
  cartItems: cartItems,
});

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
