import { cartActionTypes } from "./cart.types";

export const toggleCartHidden = () => ({
  type: cartActionTypes.TOGGLE_CART_OPEN,
  // no need for payload ( it's optional)
});

export const addItem = (item) => ({
  type: cartActionTypes.ADD_ITEM,
  payload: item,
});

export const removeItem = (item) => ({
  type: cartActionTypes.REMOVE_ITEM,
  payload: item,
});

export const decreaseItem = (item) => ({
  type: cartActionTypes.DECREASE_ITEM,
  payload: item,
});
