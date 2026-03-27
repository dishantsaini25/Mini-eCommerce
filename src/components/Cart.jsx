import { useShop } from "./context/ShopContext";
import { useNavigate } from "react-router-dom";
import { FaPlus, FaMinus, FaTrash, FaShoppingCart } from "react-icons/fa";

export default function Cart() {
  const navigate = useNavigate();
  const { cart, increaseQty, decreaseQty, removeFromCart } = useShop();

  const total = cart.reduce((acc, item) => acc + item.price * item.qty, 0);
  const totalItems = cart.reduce((acc, item) => acc + item.qty, 0);

  return (
    <div className="p-4 max-w-6xl mx-auto">
      <h1 className="text-2xl font-bold mb-6 flex items-center gap-2">
        <FaShoppingCart /> Your Cart
      </h1>

      {cart.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <div className="grid md:grid-cols-3 gap-6">
          <div className="md:col-span-2 space-y-4">
            {cart.map((item) => (
              <div key={item.id} className="flex gap-4 bg-white p-4 rounded shadow">
                <img
                  src={item.thumbnail || item.images?.[0]}
                  className="w-24 h-24 object-cover rounded"
                />
                <div className="flex-1">
                  <h2 className="font-semibold">{item.title}</h2>
                  <p className="text-green-600">₹{item.price}</p>

                  <div className="flex items-center gap-2 mt-2">
                    <button
                      onClick={() => decreaseQty(item.id)}
                      className="px-2 py-1 bg-gray-200 rounded hover:bg-gray-300"
                    >
                      <FaMinus />
                    </button>
                    <span>{item.qty}</span>
                    <button
                      onClick={() => increaseQty(item.id)}
                      className="px-2 py-1 bg-gray-200 rounded hover:bg-gray-300"
                    >
                      <FaPlus />
                    </button>
                  </div>

                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="flex items-center gap-1 text-red-500 text-sm mt-2 hover:underline"
                  >
                    <FaTrash /> Remove
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-white p-4 rounded shadow h-fit">
            <h2 className="font-bold mb-4">Order Summary</h2>
            <p>Total Items: {totalItems}</p>
            <p className="text-lg font-bold mt-2">Total: ₹{total}</p>
            <button
              onClick={() => navigate("/checkout")}
              className="mt-3 bg-green-500 text-white px-6 py-2 rounded hover:bg-green-600 flex items-center gap-2"
            >
              Proceed to Checkout
              <FaShoppingCart />
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
