import axios from 'axios';
import React, { useEffect, useState } from 'react';
import ProductCard from '../components/ProductCard';
import HeroSlider from '../components/HeroSection';
import ShopByCategory from '../components/Category';


export default function Home() {
  const [products, setProducts] = useState([]);

  function getProducts() {
    axios
      .get('https://dummyjson.com/products')
      .then((response) => {
        setProducts(response.data.products);
      })
      .catch((error) => {
        console.error(error);
        setProducts([]);
      });
  }

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero section - header ke baad */}
      <HeroSlider products={products} />
 <ShopByCategory/>
      {/* Product grid */}
      <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-6 py-6 sm:py-8">
        <h2 className="text-lg sm:text-2xl font-bold text-gray-900 mb-4">
          Featured Products
        </h2>
        {products.length === 0 ? (
          <p className="text-center text-gray-500">Loading products...</p>
        ) : (
          <div className="grid gap-4 sm:gap-6 grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

