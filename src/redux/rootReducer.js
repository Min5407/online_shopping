import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";

//storage is localStorage
//if sesion storage needed import sessionStorage from "find the link from the doc"
import storage from "redux-persist/lib/storage";

import userReducer from "./user/userReducer";
import cartReducer from "./cart/cart.reducer";
import directoryReducer from "./directory/directory.reducer";
import shopReducer from "./shop/shop.reducer";
const persistConfig = {
  key: "root",
  storage,
  //white list is a list that contains what type of state I want to store in the local storage.
  //the "cart" below needs to be equal to the rootreduce object name cart
  whitelist: ["cart"],
};

const rootReducer = combineReducers({
  user: userReducer,
  cart: cartReducer,
  directory: directoryReducer,
  shop: shopReducer,
});
export default persistReducer(persistConfig, rootReducer);
