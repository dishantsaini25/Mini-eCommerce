import { useShop } from "./context/ShopContext";
import { FaHeart, FaRegHeart, FaTrash, FaCartPlus } from "react-icons/fa";

export default function Wishlist() {
  const { wishlist, addToCart, toggleWishlist } = useShop();

  return (
    <div className="p-4 max-w-6xl mx-auto">
      <h1 className="text-2xl font-bold mb-6 flex items-center gap-2">
        <FaHeart className="text-pink-500" /> Wishlist
      </h1>

      {wishlist.length === 0 ? (
        <p>No items in wishlist</p>
      ) : (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {wishlist.map((item) => (
            <div key={item.id} className="bg-white p-3 rounded shadow">
              <img
                src={item.thumbnail}
                className="h-32 w-full object-cover rounded"
              />

              <h2 className="text-sm font-semibold mt-2">{item.title}</h2>
              <p className="text-green-600">₹{item.price}</p>

              <button
                onClick={() => addToCart(item)}
                className="mt-2 w-full bg-pink-500 text-white py-1 rounded flex items-center justify-center gap-1 hover:bg-pink-600"
              >
                <FaCartPlus /> Add to Cart
              </button>

              <button
                onClick={() => toggleWishlist(item)}
                className="mt-1 w-full text-red-500 text-sm flex items-center justify-center gap-1 hover:underline"
              >
                <FaTrash /> Remove
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
