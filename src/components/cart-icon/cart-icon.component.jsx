import React from "react";
import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";

import { connect } from "react-redux";

import { toggleCartHidden } from "../../redux/cart/cart.action";
import { selectCartItemsCount } from "../../redux/cart/cart.reselect";

import "./cart-icon.styles.scss";

const CartIcon = ({ toggleCartHidden, itemCount }) => {
  // const itemQuantityFunction = () => {
  //   const cartItemsArray = cartItems.map((item) => {
  //     return item.quantity;
  //   });
  //   const itemQuantity = cartItemsArray.reduce(
  //     (accumulator, currentValue) => accumulator + currentValue,
  //     0
  //   );
  //   return itemQuantity;
  // };
  return (
    <div className="cart-icon" onClick={toggleCartHidden}>
      <ShoppingIcon className="shopping-icon" />
      <span className="item-count">{/*itemQuantityFunction()*/ itemCount}</span>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  toggleCartHidden: () => {
    dispatch(toggleCartHidden());
  },
});

const mapStateToProps = (state) => {
  return {
    itemCount: selectCartItemsCount(state),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
