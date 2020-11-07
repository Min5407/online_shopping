import { createSelector } from "reselect";

const selectShop = (state) => state.shop;

export const selectCollections = createSelector(
  [selectShop],
  (shop) => shop.collections
);

export const selectCollectionForPreview = createSelector(
  [selectCollections],
  // the code below will change objects into an array.
  // Object.keys function will create an array with the keys in the object
  (collections) =>
    collections ? Object.keys(collections).map((key) => collections[key]) : null
);

export const selectCollection = (collectionUrlParam) =>
  createSelector([selectCollections], (collections) =>
    collections ? collections[collectionUrlParam] : null
  );
