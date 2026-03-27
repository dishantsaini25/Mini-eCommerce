import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import ProductCard from "../components/ProductCard";

import { FiShoppingBag } from "react-icons/fi";
import { FaFire } from "react-icons/fa";
import { MdStar } from "react-icons/md";
import { BsGrid } from "react-icons/bs";

export default function Home() {
  const [products, setProducts] = useState([]);

  const getProducts = async () => {
    try {
      const res = await axios.get(
        "https://dummyjson.com/products?limit=100"
      );
      setProducts(res.data.products);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getProducts();
  }, []);

  const bestDeals = products.slice(0, 8);
  const featured = products.slice(8, 16);

  return (
    <div className="relative min-h-screen bg-[#0f172a] text-white overflow-hidden">

      <div className="absolute top-[-100px] left-[-100px] w-[300px] h-[300px] bg-pink-500 rounded-full blur-3xl opacity-30"></div>
      <div className="absolute bottom-[-100px] right-[-100px] w-[300px] h-[300px] bg-purple-500 rounded-full blur-3xl opacity-30"></div>

      <div className="relative z-10 text-center py-20 px-4">
        <h1 className="flex items-center justify-center gap-2 text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">
          Next-Gen Shopping <FiShoppingBag />
        </h1>

        <p className="text-gray-300 mt-3 text-sm md:text-base">
          Premium UI Experience with Modern Design
        </p>

        <Link to="/product">
          <button className="mt-6 px-6 py-2 rounded-full bg-gradient-to-r from-pink-500 to-purple-500 hover:scale-105 transition flex items-center gap-2 mx-auto">
            <FiShoppingBag />
            Shop Now
          </button>
        </Link>
      </div>

      <div className="max-w-7xl mx-auto px-4 mt-6 relative z-10">
        <h2 className="flex items-center gap-2 text-2xl font-bold mb-6">
          <FaFire className="text-pink-500" />
          Today’s Deals
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-5">
          {bestDeals.map((product) => (
            <ProductCard
              key={product.id}
              product={{
                ...product,
                price: Math.floor(product.price),
              }}
            />
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 mt-12 relative z-10">
        <h2 className="flex items-center gap-2 text-2xl font-bold mb-6">
          <MdStar className="text-yellow-400" />
          Featured Products
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-5">
          {featured.map((product) => (
            <ProductCard
              key={product.id}
              product={{
                ...product,
                price: Math.floor(product.price),
              }}
            />
          ))}
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 mt-16 relative z-10">
        <div className="bg-gradient-to-r from-pink-500 to-purple-600 rounded-2xl p-8 text-center shadow-xl">
          <h2 className="text-xl md:text-2xl font-bold">
            Mega Sale
          </h2>
          <p className="text-sm mt-2">
            Up to 70% OFF – Limited Time Offer
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 mt-16 mb-10 relative z-10">
        <h2 className="flex items-center gap-2 text-2xl font-bold mb-6">
          <BsGrid />
          Explore More
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-5">
          {products.slice(0, 10).map((product) => (
            <ProductCard
              key={product.id}
              product={{
                ...product,
                price: Math.floor(product.price),
              }}
            />
          ))}
        </div>
      </div>

    </div>
  );
}
