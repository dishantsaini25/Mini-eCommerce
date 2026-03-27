import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaTruck, FaLock, FaCheckCircle, FaHeadset, FaShoppingCart, FaRocket } from "react-icons/fa";

export default function About() {
  const navigate = useNavigate();
  const [counts, setCounts] = useState({
    products: 0,
    customers: 0,
    orders: 0,
  });

  useEffect(() => {
    let interval = setInterval(() => {
      setCounts((prev) => ({
        products: prev.products < 10000 ? prev.products + 200 : 10000,
        customers: prev.customers < 5000 ? prev.customers + 100 : 5000,
        orders: prev.orders < 1000 ? prev.orders + 20 : 1000,
      }));
    }, 50);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-white">

      <div className="relative">
        <img
          src="https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a"
          className="w-full h-[300px] md:h-[400px] object-cover"
        />
        <div className="absolute inset-0 bg-black/50 flex flex-col justify-center items-center text-center px-4">
          <h1 className="text-3xl md:text-5xl font-bold text-white flex items-center gap-2">
            <FaShoppingCart /> We Make Shopping Simple
          </h1>
          <p className="text-gray-200 mt-3 max-w-xl">
            Discover products, explore deals, and enjoy a seamless shopping experience.
          </p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-12 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h2 className="text-2xl font-bold mb-4">Who We Are</h2>
          <p className="text-gray-600 leading-relaxed">
            We are building a modern e-commerce experience with focus on performance,
            UI/UX and scalability using MERN stack.
          </p>
        </div>
        <img
          src="https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da"
          className="rounded-xl shadow-md"
        />
      </div>

      <div className="bg-gray-100 py-12">
        <div className="max-w-6xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {[
            { title: "Fast Delivery", icon: <FaTruck className="mx-auto text-2xl text-pink-500" /> },
            { title: "Secure Payment", icon: <FaLock className="mx-auto text-2xl text-pink-500" /> },
            { title: "Quality Products", icon: <FaCheckCircle className="mx-auto text-2xl text-pink-500" /> },
            { title: "24/7 Support", icon: <FaHeadset className="mx-auto text-2xl text-pink-500" /> },
          ].map((item, i) => (
            <div key={i} className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
              {item.icon}
              <h3 className="text-lg font-semibold mt-2">{item.title}</h3>
            </div>
          ))}
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-12 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
        <div>
          <h2 className="text-3xl font-bold text-pink-500">{counts.products}+</h2>
          <p className="text-gray-600 text-sm">Products</p>
        </div>
        <div>
          <h2 className="text-3xl font-bold text-pink-500">{counts.customers}+</h2>
          <p className="text-gray-600 text-sm">Customers</p>
        </div>
        <div>
          <h2 className="text-3xl font-bold text-pink-500">{counts.orders}+</h2>
          <p className="text-gray-600 text-sm">Daily Orders</p>
        </div>
        <div>
          <h2 className="text-3xl font-bold text-pink-500">24/7</h2>
          <p className="text-gray-600 text-sm">Support</p>
        </div>
      </div>

      <div className="bg-gradient-to-r from-pink-500 to-purple-600 text-white text-center py-12 px-4">
        <h2 className="text-2xl md:text-3xl font-bold flex items-center justify-center gap-2">
          <FaRocket /> Start Shopping Now
        </h2>
        <button
          onClick={() => navigate("/product")}
          className="mt-4 px-6 py-2 bg-white text-black rounded-full font-semibold hover:scale-105 transition flex items-center gap-2 justify-center"
        >
          Explore Products
          <FaShoppingCart />
        </button>
      </div>

    </div>
  );
}
