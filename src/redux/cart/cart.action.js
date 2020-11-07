import { CartActionTypes } from "./cart.types";

export const toggleCartHidden = () => ({
  type: CartActionTypes.Toggle_Cart_Hidden,
});

export const AddItem = (item) => ({
  type: CartActionTypes.Add_Item,
  payload: item,
});
export const RemoveItem = (item) => ({
  type: CartActionTypes.Remove_Item,
  payload: item,
});

export const ClearItem = (item) => ({
  type: CartActionTypes.Clear_Item,
  payload: item,
});
