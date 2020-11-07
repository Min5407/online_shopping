import { CartActionTypes } from "./cart.types";
import { AddItemToCart, removeItemFromCart } from "./cart.utils";

const initialState = {
  hidden: true,
  cartItems: [],
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case CartActionTypes.Toggle_Cart_Hidden:
      return {
        ...state,
        hidden: !state.hidden,
      };
    case CartActionTypes.Add_Item:
      return {
        ...state,
        cartItems: AddItemToCart(state.cartItems, action.payload),
        // cartItems: [...state.cartItems, action.payload],
      };
    case CartActionTypes.Remove_Item:
      return {
        ...state,
        cartItems: removeItemFromCart(state.cartItems, action.payload),
      };
    case CartActionTypes.Clear_Item:
      return {
        ...state,
        cartItems: state.cartItems.filter(
          (cartItem) => cartItem.id !== action.payload.id
        ),
      };
    default:
      return state;
  }
};

export default cartReducer;
