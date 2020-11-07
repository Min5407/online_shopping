import ShopActionTypes from "./shop.types";

export const updateCollections = (collectionsMap) => ({
  type: ShopActionTypes.Update_Collection,
  payload: collectionsMap,
});
