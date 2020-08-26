import React from "react";
import "./checkout.styles.scss";

import { connect } from "react-redux";
import {
  decreaseItem,
  addItem,
  removeItem,
} from "../../redux/cart/cart.action";

import {
  CheckoutContainer,
  ImageContainer,
  NormalSizedItem,
  RemoveItem,
  ItemIncrease,
  ItemDecrease,
} from "./checkout.styles";

const CheckoutItem = ({ item, dispatch }) => {
  const { imageUrl, price, quantity, name } = item;
  return (
    <CheckoutContainer>
      <ImageContainer>
        <img src={imageUrl} alt="item"></img>
      </ImageContainer>
      <NormalSizedItem>{name}</NormalSizedItem>
      <NormalSizedItem isIncreaseDecrease>
        <ItemIncrease
          onClick={() => {
            dispatch(decreaseItem(item));
          }}
        >
          &#10094;
        </ItemIncrease>
        {quantity}
        <ItemDecrease
          className="item-increase"
          onClick={() => {
            dispatch(addItem(item));
          }}
        >
          &#10095;
        </ItemDecrease>
      </NormalSizedItem>
      <NormalSizedItem>{price * quantity}</NormalSizedItem>
      <RemoveItem onClick={() => dispatch(removeItem(item))}>
        &#10005;
      </RemoveItem>
    </CheckoutContainer>
  );
};

export default connect(null)(CheckoutItem);
