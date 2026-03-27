import { createContext, useContext, useEffect, useState } from "react";

const ShopContext = createContext();

export const ShopProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [wishlist, setWishlist] = useState([]);
  useEffect(() => {
    const c = localStorage.getItem("cart");
    const w = localStorage.getItem("wishlist");

    if (c) setCart(JSON.parse(c));
    if (w) setWishlist(JSON.parse(w));
  }, []);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  useEffect(() => {
    localStorage.setItem("wishlist", JSON.stringify(wishlist));
  }, [wishlist]);
  const addToCart = (product) => {
    setCart((prev) => {
      const exist = prev.find((i) => i.id === product.id);

      if (exist) {
        return prev.map((i) =>
          i.id === product.id ? { ...i, qty: i.qty + 1 } : i
        );
      }

      return [...prev, { ...product, qty: 1 }];
    });
  };
  const increaseQty = (id) => {
    setCart((prev) =>
      prev.map((i) => (i.id === id ? { ...i, qty: i.qty + 1 } : i))
    );
  };

  const decreaseQty = (id) => {
    setCart((prev) =>
      prev
        .map((i) => (i.id === id ? { ...i, qty: i.qty - 1 } : i))
        .filter((i) => i.qty > 0)
    );
  };
  const removeFromCart = (id) => {
    setCart((prev) => prev.filter((i) => i.id !== id));
  };
  const clearCart = () => {
    setCart([]);
    localStorage.removeItem("cart");
  };
  const totalPrice = cart.reduce(
    (acc, item) => acc + item.price * item.qty,
    0
  );

  const totalItems = cart.reduce((acc, item) => acc + item.qty, 0);
  const toggleWishlist = (product) => {
    setWishlist((prev) => {
      const exist = prev.find((i) => i.id === product.id);

      if (exist) return prev.filter((i) => i.id !== product.id);
      return [...prev, product];
    });
  };

  return (
    <ShopContext.Provider
      value={{
        cart,
        wishlist,
        addToCart,
        increaseQty,
        decreaseQty,
        removeFromCart,
        toggleWishlist,
        totalPrice,
        totalItems,
        clearCart,
      }}
    >
      {children}
    </ShopContext.Provider>
  );
};

export const useShop = () => useContext(ShopContext);
