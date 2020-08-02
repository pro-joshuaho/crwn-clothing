export const addItemToCart = (cartItems, newItem) => {
  const existAlready = cartItems.find((cartItem) => cartItem.id === newItem.id);

  if (existAlready) {
    return cartItems.map((item) =>
      item.id === newItem.id ? { ...item, quantity: item.quantity + 1 } : item
    );
  } else {
    return [...cartItems, { ...newItem, quantity: 1 }]; //quantity will be replaced by the new one automatically
  }
};
