import shopTypes from "./shop.types";

const INITIAL_STATE = {
  SHOP_DATA: null,
};

const shopReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case shopTypes.UPDATE_COLLECTIONS:
      return {
        ...state,
        SHOP_DATA: action.payload,
        //must be ...state first because it takes SHOP_DATA: null first then replace it with the array
      };
    default:
      return state;
  }
};

export default shopReducer;
