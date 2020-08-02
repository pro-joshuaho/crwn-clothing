import { combineReducers } from "redux";

import userReducer from "./user/user.reducer";
import cartOpenReducer from "./cart/cart.reducer";

export default combineReducers({
  user: userReducer,
  cart: cartOpenReducer,
});
