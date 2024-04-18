import React, { createContext, useState } from 'react';
import { PRODUCT } from '../product';
export const ShopContext = createContext(null);

const getDeafautCart = () => {
  let cart = {};
  for (let i = 1; i < PRODUCT.length + 1; i++) {
    cart[i] = 0;
  }
  return cart;
}

const ShopContextProvider = (props) => {
  const [cartItems, setCartItems] = useState(getDeafautCart());
  
  const getTotalAmount = () => {
    let total = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        let itemInfo = PRODUCT.find((product) => product.id === Number(item));
            total +=itemInfo.price * cartItems[item];
      }
    }
    return total;
  }

  const addToCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
  };

  const removeFromCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
  };
  const updateCartItem = (newCount, itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: newCount }));
  }
  const contextValues = { cartItems, addToCart, removeFromCart, updateCartItem,getTotalAmount};
  return (
    <ShopContext.Provider value={contextValues}>
      {props.children}
    </ShopContext.Provider>
  );
};

export default ShopContextProvider;