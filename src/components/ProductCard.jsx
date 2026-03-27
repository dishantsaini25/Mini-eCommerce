import { useNavigate } from "react-router-dom";
import { useShop } from "./context/ShopContext";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { FiPlus, FiMinus } from "react-icons/fi";

const ProductCard = ({ product }) => {
  const navigate = useNavigate();

  const {
    cart,
    addToCart,
    toggleWishlist,
    wishlist,
    increaseQty,
    decreaseQty,
  } = useShop();

  const isWishlisted = wishlist.find((item) => item.id === product.id);
  const cartItem = cart.find((item) => item.id === product.id);

  return (
    <div
      onClick={() => navigate(`/product/${product.id}`)}
      className="group relative bg-white rounded-xl shadow hover:shadow-xl cursor-pointer overflow-hidden transition"
    >
      <button
        onClick={(e) => {
          e.stopPropagation();
          toggleWishlist(product);
        }}
        className="absolute top-2 right-2 z-10 text-xl hover:scale-110 transition"
      >
        {isWishlisted ? (
          <FaHeart className="text-red-500" />
        ) : (
          <FaRegHeart className="text-gray-500" />
        )}
      </button>

      <img
        src={product.thumbnail}
        alt={product.title}
        className="w-full h-40 object-cover group-hover:scale-105 transition"
      />

      <div className="p-3">
        <p className="text-sm font-semibold truncate">{product.title}</p>
        <p className="text-green-600 font-bold">₹{product.price}</p>

        {!cartItem ? (
          <button
            onClick={(e) => {
              e.stopPropagation();
              addToCart(product);
            }}
            className="mt-2 w-full bg-pink-500 hover:bg-pink-600 text-white py-1.5 rounded-lg transition"
          >
            Add to Cart
          </button>
        ) : (
          <div
            onClick={(e) => e.stopPropagation()}
            className="mt-2 flex items-center justify-between bg-gray-900 text-white rounded-lg px-3 py-1 shadow"
          >
            <button
              onClick={() => decreaseQty(product.id)}
              className="p-1 bg-gray-700 hover:bg-gray-500 transition rounded"
            >
              <FiMinus />
            </button>

            <span className="font-semibold text-white">
              {cartItem.qty}
            </span>

            <button
              onClick={() => increaseQty(product.id)}
              className="p-1 bg-gray-700 hover:bg-gray-500 transition rounded"
            >
              <FiPlus />
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductCard;
