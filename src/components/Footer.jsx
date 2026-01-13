import React from 'react';
import { 
  FaFacebook, FaTwitter, FaInstagram, FaYoutube, 
  FaFileAlt, FaHeadset, FaShieldAlt, FaComments,FaOpencart
} from 'react-icons/fa';

const Footer = () => {
  const companyName = 'QuickCart'; // Replace with your company name
  const punchLine = 'Your Trusted Online Shopping Destination';

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          
          {/* Left Section: Company Info + Social Icons */}
          <div className="space-y-6">
            <div>
               <FaOpencart className="h-10 w-10 text-green-600" />
              <h3 className="text-2xl font-bold text-white mb-2">{companyName}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{punchLine}</p>
            </div>
            <div className="flex space-x-4">
              <a href="#" className="p-3 bg-gray-800 rounded-full hover:bg-blue-600 transition-colors duration-300">
                <FaFacebook className="h-5 w-5" />
              </a>
              <a href="#" className="p-3 bg-gray-800 rounded-full hover:bg-sky-500 transition-colors duration-300">
                <FaTwitter className="h-5 w-5" />
              </a>
              <a href="#" className="p-3 bg-gray-800 rounded-full hover:bg-pink-500 transition-colors duration-300">
                <FaInstagram className="h-5 w-5" />
              </a>
              <a href="#" className="p-3 bg-gray-800 rounded-full hover:bg-red-600 transition-colors duration-300">
                <FaYoutube className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Center Section: Navigation Links */}
          <div className="space-y-6">
            <h4 className="text-lg font-semibold text-white">Quick Links</h4>
            <div className="space-y-3">
              <a href="#home" className="block text-gray-400 hover:text-white transition-colors duration-200 text-sm">Home</a>
              <a href="#about" className="block text-gray-400 hover:text-white transition-colors duration-200 text-sm">About</a>
              <a href="#products" className="block text-gray-400 hover:text-white transition-colors duration-200 text-sm">Products</a>
              <a href="#contact" className="block text-gray-400 hover:text-white transition-colors duration-200 text-sm">Contact</a>
            </div>
          </div>

          {/* Right Section: Guide & Help */}
          <div className="space-y-6">
            <h4 className="text-lg font-semibold text-white">Guide & Help</h4>
            <div className="space-y-3">
              <a href="#" className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors duration-200 text-sm group">
                <FaFileAlt className="h-4 w-4 group-hover:text-white transition-colors" />
                Terms & Conditions
              </a>
              <a href="#" className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors duration-200 text-sm group">
                <FaHeadset className="h-4 w-4 group-hover:text-white transition-colors" />
                {companyName} Care
              </a>
              <a href="#" className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors duration-200 text-sm group">
                <FaShieldAlt className="h-4 w-4 group-hover:text-white transition-colors" />
                Privacy
              </a>
              <a href="#" className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors duration-200 text-sm group">
                <FaComments className="h-4 w-4 group-hover:text-white transition-colors" />
                ChatBot
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Copyright */}
        <div className="border-t border-gray-800 pt-8 mt-12 text-center">
          <p className="text-gray-500 text-sm">
            © 2026 {companyName}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
