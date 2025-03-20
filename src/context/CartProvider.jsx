import { CartContext } from "./CartContext";
import { useState } from "react";

function CartProvider({ children }) {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    const existingItem = cart.find((item) => item.id === product.id);

    if (existingItem) {
      setCart(
        cart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + product.quantity }
            : item
        )
      );
    } else {
      setCart([...cart, product]);
    }
  };

  const getquantity = () => {
    const quantities = cart.map((product) => product.quantity);
    const total = quantities.reduce((acc, curr) => acc + curr, 0);
    return total;
  };

  const getTotal = () => {
    const quantities = cart.map((product) => product.price * product.quantity);
    const result = quantities.reduce((acc, curr) => acc + curr, 0);
    return result;
  };

  const removeFromCart = (productId) => {
    const updatedCart = cart.filter((item) => item.id !== productId);
    setCart(updatedCart);
  };

  const clearCart = () => {
    setCart([]);
  };

  return (
    <CartContext.Provider
      value={{
        addToCart,
        getquantity,
        removeFromCart,
        cart,
        getTotal,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export default CartProvider;