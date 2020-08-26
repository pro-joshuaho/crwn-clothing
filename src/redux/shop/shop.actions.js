import shopTypes from "./shop.types";

export const updateShopArray = (newArray) => ({
  type: shopTypes.UPDATE_COLLECTIONS,
  payload: newArray,
});
