import { cartActionTypes } from "./cart.types";

import { addItemToCart, decreaseCartItem } from "./cart.utils";

const INITIAL_STATE = { hidden: true, cartItems: [] };

const cartOpenReducer = (
  state = INITIAL_STATE /*{ hidden: true }*/,
  action
) => {
  switch (action.type) {
    case cartActionTypes.TOGGLE_CART_OPEN:
      return {
        ...state, // return all state including {hidden}**
        hidden: !state.hidden, // updates the {hidden} value
      };
    case cartActionTypes.ADD_ITEM:
      return {
        ...state,
        cartItems: addItemToCart(state.cartItems, action.payload),
      };
    case cartActionTypes.REMOVE_ITEM:
      return {
        ...state,
        cartItems: state.cartItems.filter(
          (item) => action.payload.id !== item.id
        ),
      };
    case cartActionTypes.DECREASE_ITEM:
      return {
        ...state,
        cartItems: decreaseCartItem(state.cartItems, action.payload),
      };
    default:
      return state;
  }
};

export default cartOpenReducer;
