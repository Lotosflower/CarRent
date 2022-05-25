export const getCartData = () => {
  return localStorage.getItem(`cart`)
    ? JSON.parse(localStorage.getItem(`cart`))
    : [];
};

export const addToCart = (newData, cart, setCart) => {
  let findIndex = cart.findIndex(({ id }) => id === newData.id);
  if (findIndex === -1) {
    newData.count = 1;
    cart.push(newData);
  } else {
    cart[findIndex].count += 1;
  }

  localStorage.setItem(`cart`, JSON.stringify(cart));
  setCart([...cart]);
};
