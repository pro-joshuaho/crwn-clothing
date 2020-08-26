import React from "react";
// import "./cart-item.styles.scss";
import {
  CartItemContainer,
  ItemImageContainer,
  ItemText,
} from "./cart-item.styles";

const CartItem = ({ imageUrl, name, quantity, price }) => (
  <CartItemContainer>
    <ItemImageContainer>
      <img src={imageUrl} alt="item"></img>
    </ItemImageContainer>
    <ItemText>
      <span>{name}</span>
      <span>{`${quantity} x $${price}`}</span>
    </ItemText>
  </CartItemContainer>
);

export default CartItem;
