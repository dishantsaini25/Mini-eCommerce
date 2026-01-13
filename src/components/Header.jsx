import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { FaSearch, FaHeart, FaShoppingCart, FaChevronDown, FaOpencart } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Header = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [searchValue, setSearchValue] = useState('');
  const [placeholderIndex, setPlaceholderIndex] = useState(0);
  const location = useLocation(); // Track current route

  const placeholders = [
    'Search "Beauty"',
    'Search "Fragrances"',
    'Search "Furniture"',
    'Search "Groceries"',
    'Search "Clothing"',
    'Search "Electronics"',
    'Search "Pet Supplies"',
    'Search "Accessories"',


  ];

  const productCategories = [
    'Beauty', 'Fragrances', 'Furniture', 'Groceries', 'Clothing', 'Electronics',`Pet Supplies`,`Accessories`
  ];

  // Active nav state based on current location
  const getNavClass = (path) => {
    return location.pathname === path 
      ? 'text-green-600 font-bold border-b-2 border-green-600 pb-1'
      : 'text-gray-700 hover:text-green-600 font-medium transition-colors hover:border-b-2 hover:border-green-600 pb-1';
  };

  useEffect(() => {
    if (searchValue === '') {
      const interval = setInterval(() => {
        setPlaceholderIndex((prev) => (prev + 1) % placeholders.length);
      }, 2000);
      return () => clearInterval(interval);
    }
  }, [searchValue, placeholders.length]);

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo - Left */}
          <div className="flex-shrink-0 flex flex-col items-center space-y-1">
            <FaOpencart className="h-10 w-10 text-green-600" />
            <span className="text-sm font-bold text-gray-800 tracking-wide">QuickCart</span>
          </div>

          {/* Navbar - Center */}
          <nav className="hidden md:flex items-center space-x-8 mx-20">
            <Link to="/" className={getNavClass('/')}>Home</Link>
            <Link to="/about" className={getNavClass('/about')}>About</Link>
            
            {/* Products Dropdown */}
            <div className="relative group">
              <button className="flex items-center pb-1 text-gray-700 hover:text-green-600 font-medium transition-colors gap-1 hover:border-b-2 hover:border-green-600">
                Products
                <FaChevronDown className="h-4 w-4" />
              </button>
              <div className="absolute top-full left-0 mt-2 w-48 bg-white border border-gray-200 rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-10">
                {productCategories.map((category) => (
                  <Link
                    key={category}
                    to={`/products/${category.toLowerCase().replace('&', '')}`}
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-green-600 transition-colors"
                  >
                    {category}
                  </Link>
                ))}
              </div>
            </div>

            <Link to="/contact" className={getNavClass('/contact')}>Contact</Link>
          </nav>

          {/* Right Side: Search, Wishlist, Cart */}
          <div className="flex items-center space-x-4">
            {/* Small Search Bar */}
            <div className="relative hidden sm:block w-64">
              <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              <input
                type="text"
                value={searchValue}
                onChange={(e) => setSearchValue(e.target.value)}
                placeholder={searchValue === '' ? placeholders[placeholderIndex] : ''}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200"
              />
              {searchValue !== '' && (
                <button
                  onClick={() => setSearchValue('')}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                >
                  <FaSearch className="h-3 w-3" />
                </button>
              )}
            </div>

            {/* Wishlist Icon */}
            <button className="relative p-2 text-gray-500 hover:text-red-500 transition-colors">
              <FaHeart className="h-5 w-5" />
              <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">0</span>
            </button>

            {/* Cart Icon */}
            <button className="relative p-2 text-gray-500 hover:text-green-600 transition-colors">
              <FaShoppingCart className="h-5 w-5" />
              <span className="absolute -top-1 -right-1 bg-green-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">0</span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
