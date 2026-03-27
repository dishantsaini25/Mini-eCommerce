import React from 'react';
import {
  FaTshirt,
  FaCouch,
  FaAppleAlt,
  FaPumpSoap,
  FaRing,
  FaLaptop,
  FaDog,
  FaSprayCan,
} from 'react-icons/fa';

const categories = [
  { name: 'Beauty', icon: FaPumpSoap },
  { name: 'Fragrances', icon: FaSprayCan },
  { name: 'Furniture', icon: FaCouch },
  { name: 'Groceries', icon: FaAppleAlt },
  { name: 'Clothing', icon: FaTshirt },
  { name: 'Electronics', icon: FaLaptop },
  { name: 'Pet Supplies', icon: FaDog },
  { name: 'Accessories', icon: FaRing },
];

const ShopByCategory = () => {
  return (
    <section className="w-full bg-gray-50">
      <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-6 py-6 sm:py-8">
        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
     
          <div className="w-full sm:w-1/4">
            <h2 className="text-lg sm:text-2xl font-bold text-gray-900">
              Shop by Category
            </h2>
          </div>

        
          <div className="w-full sm:w-3/4">
            <div className="flex justify-end mb-3">
              <button className="text-sm font-semibold text-green-700 hover:text-green-800 pe-2">
                See all
              </button>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
              {categories.map(({ name, icon: Icon }) => (
                <button
                  key={name}
                  className="flex flex-col items-center justify-center gap-2 rounded-xl border border-gray-200 bg-white hover:border-green-500 hover:shadow-md transition-all duration-200 py-3 sm:py-4"
                >
                  <div className="flex items-center justify-center h-10 w-10 sm:h-12 sm:w-12 rounded-full bg-green-50 text-green-700">
                    <Icon className="h-5 w-5 sm:h-6 sm:w-6" />
                  </div>
                  <span className="text-xs sm:text-sm font-medium text-gray-800">
                    {name}
                  </span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ShopByCategory;
