export const addItemToCart = (cartItems, newItem) => {
  const existAlready = cartItems.find((cartItem) => cartItem.id === newItem.id);

  if (existAlready) {
    return cartItems.map((item) =>
      item.id === newItem.id ? { ...item, quantity: item.quantity + 1 } : item
    );
  } else {
    return [...cartItems, { ...newItem, quantity: 1 }]; //quantity will be replaced by the better-defined one automatically
  }
};

export const decreaseCartItem = (cartItems, itemToBeDecreased) => {
  const existingCartItem = cartItems.find(
    (item) => item.id === itemToBeDecreased.id
  );

  console.log(existingCartItem);
  if (existingCartItem.quantity === 1) {
    return cartItems.filter((item) => item.id !== itemToBeDecreased.id);
  }

  return cartItems.map((item) =>
    item.id === itemToBeDecreased.id
      ? { ...item, quantity: item.quantity - 1 }
      : item
  );
};
