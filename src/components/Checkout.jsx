import React, { useState } from "react";
import { useShop } from "./context/ShopContext";
import { useNavigate } from "react-router-dom";

export default function Checkout() {
  const { cart, totalPrice, clearCart } = useShop(); // ✅ added clearCart
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    phone: "",
    address: "",
    city: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const placeOrder = () => {
    if (!form.name || !form.phone || !form.address) {
      alert("Please fill all fields");
      return;
    }

    const order = {
      items: cart,
      user: form,
      total: totalPrice,
      date: new Date(),
    };

    localStorage.setItem("lastOrder", JSON.stringify(order));

    clearCart();

    navigate("/success");
  };

  return (
    <div className="max-w-5xl mx-auto p-4 grid md:grid-cols-2 gap-6">

    
      <div className="bg-white p-4 rounded shadow">
        <h2 className="text-xl font-bold mb-4">Delivery Details</h2>

        <input
          name="name"
          placeholder="Full Name"
          className="w-full border p-2 mb-3"
          onChange={handleChange}
        />

        <input
          name="phone"
          placeholder="Phone Number"
          className="w-full border p-2 mb-3"
          onChange={handleChange}
        />

        <textarea
          name="address"
          placeholder="Address"
          className="w-full border p-2 mb-3"
          onChange={handleChange}
        />

        <input
          name="city"
          placeholder="City"
          className="w-full border p-2"
          onChange={handleChange}
        />
      </div>

  
      <div className="bg-white p-4 rounded shadow">
        <h2 className="text-xl font-bold mb-4">Order Summary</h2>

        {cart.map((item) => (
          <div key={item.id} className="flex justify-between mb-2">
            <span>{item.title} x {item.qty}</span>
            <span>₹{item.price * item.qty}</span>
          </div>
        ))}

        <hr className="my-3" />

        <h3 className="font-bold text-lg">
          Total: ₹{totalPrice}
        </h3>

        <button
          onClick={placeOrder}
          className="mt-4 w-full bg-black text-white py-2 rounded"
        >
          Place Order
        </button>
      </div>

    </div>
  );
}
