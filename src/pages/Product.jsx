import React, { useEffect, useState, useRef } from "react";
import axios from "axios";
import ProductCard from "../components/ProductCard";
import { FaStar } from "react-icons/fa";

export default function Product() {
  const [products, setProducts] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [category, setCategory] = useState("all");
  const [sort, setSort] = useState("");
  const [rating, setRating] = useState(0);
  const [price, setPrice] = useState(1000);
  const [showFilter, setShowFilter] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const perPage = 8;
  const productRef = useRef(null);

  useEffect(() => {
    axios.get("https://dummyjson.com/products?limit=100")
      .then((res) => {
        setProducts(res.data.products);
        setFiltered(res.data.products);
      });
  }, []);

  useEffect(() => {
    let temp = [...products];
    if (category !== "all") temp = temp.filter((p) => p.category === category);
    if (rating > 0) temp = temp.filter((p) => p.rating >= rating);
    temp = temp.filter((p) => p.price <= price);
    if (sort === "low") temp.sort((a, b) => a.price - b.price);
    if (sort === "high") temp.sort((a, b) => b.price - a.price);
    setFiltered(temp);
    setCurrentPage(1);
  }, [category, sort, rating, price, products]);

  useEffect(() => {
    productRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [currentPage]);

  const start = (currentPage - 1) * perPage;
  const paginated = filtered.slice(start, start + perPage);
  const totalPages = Math.ceil(filtered.length / perPage);

  const formatText = (text) => text.charAt(0).toUpperCase() + text.slice(1);
  const categories = ["all", ...new Set(products.map((p) => p.category))];
  const clearFilters = () => {
    setCategory("all");
    setSort("");
    setRating(0);
    setPrice(1000);
  };

  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-gray-100">
      <div className="md:hidden p-3 flex justify-between bg-white shadow">
        <h2 className="font-bold">Products</h2>
        <button
          onClick={() => setShowFilter(true)}
          className="bg-pink-500 text-white px-3 py-1 rounded"
        >
          Filters
        </button>
      </div>

      <div className="hidden md:block w-72 p-4 sticky top-20">
        <div className="bg-white p-4 rounded-xl shadow space-y-6">
          <h2 className="font-bold border-b pb-2">Filters</h2>
          <div>
            <p className="font-semibold mb-2">Category</p>
            <div className="flex flex-wrap gap-2">
              {categories.map((cat, i) => (
                <button
                  key={i}
                  onClick={() => setCategory(cat)}
                  className={`px-3 py-1 rounded-full text-sm ${
                    category === cat ? "bg-pink-500 text-white" : "bg-gray-100"
                  }`}
                >
                  {formatText(cat)}
                </button>
              ))}
            </div>
          </div>

          <div>
            <p className="font-semibold mb-2">Price: ₹{price}</p>
            <input
              type="range"
              min="0"
              max="2000"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              className="w-full"
            />
          </div>

          <div>
            <p className="font-semibold mb-2">Rating</p>
            {[4, 3, 2, 1].map((r) => (
              <button
                key={r}
                onClick={() => setRating(r)}
                className={`block text-sm mb-1 flex items-center gap-1 ${
                  rating === r ? "text-yellow-500 font-bold" : ""
                }`}
              >
                <FaStar /> {r}+ Stars
              </button>
            ))}
          </div>

          <div>
            <p className="font-semibold mb-2">Sort</p>
            <button onClick={() => setSort("low")} className="block text-sm">
              Price Low → High
            </button>
            <button onClick={() => setSort("high")} className="block text-sm">
              Price High → Low
            </button>
          </div>

          <button
            onClick={clearFilters}
            className="w-full bg-red-500 text-white py-2 rounded"
          >
            Clear Filters
          </button>
        </div>
      </div>

      {showFilter && (
        <div className="fixed inset-0 z-50 flex">
          <div
            className="flex-1 bg-black/50"
            onClick={() => setShowFilter(false)}
          ></div>
          <div className="w-80 bg-white p-5 overflow-y-auto">
            <div className="flex justify-between items-center mb-4">
              <h2 className="font-bold text-lg">Filters</h2>
              <button onClick={() => setShowFilter(false)}>✕</button>
            </div>

            <div className="space-y-6">
              <div>
                <p className="font-semibold mb-2">Category</p>
                <div className="flex flex-wrap gap-2">
                  {categories.map((cat, i) => (
                    <button
                      key={i}
                      onClick={() => setCategory(cat)}
                      className={`px-3 py-1 rounded-full text-sm ${
                        category === cat ? "bg-pink-500 text-white" : "bg-gray-100"
                      }`}
                    >
                      {formatText(cat)}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <p className="font-semibold mb-2">Price: ₹{price}</p>
                <input
                  type="range"
                  min="0"
                  max="2000"
                  value={price}
                  onChange={(e) => setPrice(e.target.value)}
                  className="w-full"
                />
              </div>

              <div>
                <p className="font-semibold mb-2">Rating</p>
                {[4, 3, 2, 1].map((r) => (
                  <button
                    key={r}
                    onClick={() => setRating(r)}
                    className={`block text-sm mb-1 flex items-center gap-1 ${
                      rating === r ? "text-yellow-500 font-bold" : ""
                    }`}
                  >
                    <FaStar /> {r}+ Stars
                  </button>
                ))}
              </div>

              <div>
                <p className="font-semibold mb-2">Sort</p>
                <button onClick={() => setSort("low")} className="block text-sm">
                  Price Low → High
                </button>
                <button onClick={() => setSort("high")} className="block text-sm">
                  Price High → Low
                </button>
              </div>

              <div className="flex gap-2 pt-4">
                <button
                  onClick={clearFilters}
                  className="w-full bg-red-500 text-white py-2 rounded"
                >
                  Clear
                </button>
                <button
                  onClick={() => setShowFilter(false)}
                  className="w-full bg-black text-white py-2 rounded"
                >
                  Apply
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      <div className="flex-1 p-4" ref={productRef}>
        <h2 className="font-bold mb-4">Products ({filtered.length})</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {paginated.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
        <div className="flex justify-center mt-6 gap-2 flex-wrap">
          {[...Array(totalPages)].map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentPage(i + 1)}
              className={`px-3 py-1 border rounded ${
                currentPage === i + 1 ? "bg-black text-white" : "bg-white"
              }`}
            >
              {i + 1}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
