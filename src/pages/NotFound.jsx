import React from 'react';
import { Link } from 'react-router-dom';
import { FaOpencart, FaHome, FaArrowLeft } from 'react-icons/fa';

const NotFound = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-green-50 flex items-center justify-center px-4 py-16">
      <div className="max-w-md w-full text-center space-y-8">
      
        <div className="space-y-4">
          <div className="mx-auto w-24 h-24 bg-white rounded-2xl shadow-2xl flex items-center justify-center">
            <FaOpencart className="h-16 w-16 text-green-600" />
          </div>
          <div className="space-y-2">
            <h1 className="text-6xl md:text-8xl font-black bg-gradient-to-r from-green-600 to-green-400 bg-clip-text text-transparent tracking-tight">
              404
            </h1>
            <p className="text-2xl md:text-3xl font-bold text-gray-900">Page Not Found</p>
          </div>
        </div>

        
        <div className="space-y-4">
          <p className="text-lg text-gray-600 leading-relaxed max-w-sm mx-auto">
            Sorry, the page you're looking for doesn't exist or has been moved.
          </p>
          <p className="text-sm text-gray-500">
            Double-check the URL or head back to our shopping paradise!
          </p>
        </div>

       
        <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
          <Link
            to="/"
            className="group flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 text-white font-semibold py-4 px-8 rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 text-base w-full sm:w-auto"
          >
            <FaHome className="h-5 w-5 group-hover:scale-110 transition-transform" />
            Back to Home
          </Link>
          <Link
            to="/products/electronics"
            className="group flex items-center justify-center gap-2 bg-white hover:bg-gray-50 text-green-600 border-2 border-green-600 font-semibold py-4 px-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 text-base w-full sm:w-auto"
          >
            <FaOpencart className="h-5 w-5 group-hover:scale-110 transition-transform" />
            Shop Now
          </Link>
        </div>

      
        <div className="pt-8 border-t border-gray-200">
          <p className="text-sm text-gray-500 mb-4">Quick links:</p>
          <div className="flex flex-wrap gap-3 justify-center">
            <Link to="/" className="text-green-600 hover:text-green-700 font-medium text-sm">Home</Link>
            <Link to="/about" className="text-green-600 hover:text-green-700 font-medium text-sm">About</Link>
            <Link to="/products/electronics" className="text-green-600 hover:text-green-700 font-medium text-sm">Electronics</Link>
            <Link to="/products/clothing" className="text-green-600 hover:text-green-700 font-medium text-sm">Clothing</Link>
            <Link to="/contact" className="text-green-600 hover:text-green-700 font-medium text-sm">Contact</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
