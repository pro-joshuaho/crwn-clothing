import React from "react";
import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";

import { connect } from "react-redux";

import { toggleCartHidden } from "../../redux/cart/cart.action";
import { selectCartItemsCount } from "../../redux/cart/cart.reselect";

import { createStructuredSelector } from "reselect";

// import "./cart-icon.styles.scss";
import {
  ShoppingIconContainer,
  ItemCount,
  CartIconContainer,
} from "./cart-icon.styles";

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
    <CartIconContainer onClick={() => toggleCartHidden() /*toggleCartHidden*/}>
      <ShoppingIconContainer className="shopping-icon" />
      <ItemCount>{/*itemQuantityFunction()*/ itemCount}</ItemCount>
    </CartIconContainer>
  );
};

const mapDispatchToProps = (dispatch) => ({
  toggleCartHidden: () => {
    dispatch(toggleCartHidden());
  },
});

const mapStateToProps = createStructuredSelector({
  itemCount: selectCartItemsCount,
});

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
