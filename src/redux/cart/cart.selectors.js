import { createSelector } from "reselect";
//select is used to not to rerender some of the component that is not needed to rerender
//saves performance
//A selector is not recomputed unless one of its arguments changes.

//gets the state.cart from redux state
const selectCart = (state) => state.cart;

//gets the cart.item from redux state
export const selectCartItems = createSelector(
  [selectCart],
  (cart) => cart.cartItems
);

//gets the cart.items then use this to get total quatity
export const selectCartItemsCount = createSelector(
  [selectCartItems],
  (cartItems) =>
    cartItems.reduce(
      (accumulateQuantity, cartItem) => accumulateQuantity + cartItem.quantity,
      0
    )
);

export const selectCartHidden = createSelector(
  [selectCart],
  (cart) => cart.hidden
);

export const selectCartItemsTotalPrice = createSelector(
  [selectCartItems],
  (cartItems) =>
    cartItems.reduce(
      (accumulateQuantity, cartItem) =>
        accumulateQuantity + cartItem.quantity * cartItem.price,
      0
    )
);
