import { useState } from "react";
import { Link } from "react-router-dom";
import { useShop } from "./context/ShopContext";
import { FaHeart, FaRegHeart, FaShoppingCart, FaBars, FaTimes } from "react-icons/fa";

export default function Header() {
  const { cart, wishlist } = useShop();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
     
      <div className="bg-black text-white px-4 md:px-8 py-3 flex items-center justify-between sticky top-0 z-50">
        <div className="flex items-center gap-3">
          <button
            className="md:hidden text-2xl"
            onClick={() => setMenuOpen(true)}
          >
            <FaBars />
          </button>
          <Link to="/" className="text-lg md:text-xl font-bold">
            Shopping Cart
          </Link>
        </div>

      
        <div className="hidden md:flex flex-1 mx-6">
          <input
            type="text"
            placeholder="Search products..."
            className="w-full px-4 py-1 rounded text-black"
          />
        </div>

        <div className="flex items-center gap-4">
         
          <div className="hidden md:flex gap-6">
            <Link to="/">Home</Link>
            <Link to="/product">Products</Link>
            <Link to="/about">About</Link>
            <Link to="/contact">Contact</Link>
          </div>

          <Link to="/wishlist" className="relative text-xl">
            {wishlist.length > 0 ? (
              <FaHeart className="text-pink-500" />
            ) : (
              <FaRegHeart className="text-white" />
            )}
            {wishlist.length > 0 && (
              <span className="absolute -top-2 -right-2 bg-pink-500 text-xs px-1 rounded-full">
                {wishlist.length}
              </span>
            )}
          </Link>

          <Link to="/cart" className="relative text-xl">
            <FaShoppingCart />
            {cart.length > 0 && (
              <span className="absolute -top-2 -right-2 bg-green-500 text-xs px-1 rounded-full">
                {cart.length}
              </span>
            )}
          </Link>
        </div>
      </div>

      {menuOpen && (
        <div className="fixed inset-0 z-50 flex">
          <div
            className="flex-1 bg-black/50"
            onClick={() => setMenuOpen(false)}
          ></div>

          <div className="w-64 bg-white text-black p-5">
            <button
              className="text-xl mb-4"
              onClick={() => setMenuOpen(false)}
            >
              <FaTimes />
            </button>

            <input
              type="text"
              placeholder="Search..."
              className="w-full px-3 py-2 border mb-4 rounded"
            />

            <div className="flex flex-col gap-4">
              <Link to="/" onClick={() => setMenuOpen(false)}>Home</Link>
              <Link to="/product" onClick={() => setMenuOpen(false)}>Products</Link>
              <Link to="/about" onClick={() => setMenuOpen(false)}>About</Link>
              <Link to="/cart" onClick={() => setMenuOpen(false)}>
                Cart ({cart.length})
              </Link>
              <Link to="/wishlist" onClick={() => setMenuOpen(false)}>
                Wishlist ({wishlist.length})
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
