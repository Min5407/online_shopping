export const AddItemToCart = (cartItems, cartItemToAdd) => {
  const findExistingItem = cartItems.find(
    (cartItem) => cartItem.id === cartItemToAdd.id
  );

  //findexistingItem will become true if the item that has been added can be found in the previous cart items list
  if (findExistingItem) {
    // this function is used to increase a quatity in the cartItem
    return cartItems.map((cartItem) =>
      cartItem.id === cartItemToAdd.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
  } else {
    //   the code below will create quatity property in the object since there is not quantity property in the beginning
    return [{ ...cartItemToAdd, quantity: 1 }, ...cartItems];
  }
};

export const removeItemFromCart = (cartItems, cartItemToRemove) => {
  const findExistingItem = cartItems.find(
    (cartItem) => cartItem.id === cartItemToRemove.id
  );

  if (findExistingItem.quantity === 1) {
    return cartItems.filter((cartItem) => cartItem.id !== cartItemToRemove.id);
  } else {
    const removedCart = cartItems.map((cartItem) =>
      cartItem.id === cartItemToRemove.id
        ? { ...cartItem, quantity: cartItem.quantity - 1 }
        : cartItem
    );

    return removedCart;
  }
};
