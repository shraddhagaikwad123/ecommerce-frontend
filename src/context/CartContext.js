import React, { useState, createContext, useContext } from "react";

const CartContext = createContext();

// HOOK
export const useCart = () => useContext(CartContext);

// PROVIDER
export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (product, quantity) => {
    //setCart((prevCart) => [...prevCart, product]);
    setCart((prevCart) => {
      const isFound = prevCart.find((item) => item.id === product.id);
      if (isFound) {
        // product already in cart, update the quantity
        return prevCart.map((item) =>
          item.id === product.id ? { ...item, quantity: quantity + 1 } : item
        );
      } else {
        // product is not in the cart, add a new product
        return [...prevCart, { ...product, quantity: quantity }];
      }
    });
  };

  const removeFromCart = (productId) => {
    setCart((prevCart) =>
      prevCart.reduce((acc, product) => {
        if (product.id === productId) {
          if (product.quantity > 1) {
            // Reduce quantity if more than one
            acc.push({ ...product, quantity: product.quantity - 1 });
          }
        } else {
          acc.push(product);
        }
        return acc;
      }, [])
    );
  };
  const removeProduct = (productId) => {
    setCart((prevCart) =>
      prevCart.filter((item) => {
        return item.id !== productId;
      })
    );
  };
  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart,removeProduct }}>
      {children}
    </CartContext.Provider>
  );
};