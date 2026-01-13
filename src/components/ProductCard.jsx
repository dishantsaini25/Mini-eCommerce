// src/components/ProductCard.jsx
import React, { useState } from 'react';
import {
  FaStar,
  FaRegStar,
  FaCartPlus,
  FaHeart,
  FaTag,
  FaBoxOpen,
  FaBox,
  FaTruck,
  FaUndo,
  FaShieldAlt,
  FaChevronDown,
} from 'react-icons/fa';

const ProductCard = ({ product }) => {
  const [isDetailsOpen, setIsDetailsOpen] = useState(false);

  if (!product) return null;

  const {
    title,
    description,
    category,
    price,
    discountPercentage,
    rating,
    stock,
    tags = [],
    brand,
    sku,
    weight,
    dimensions,
    warrantyInformation,
    shippingInformation,
    availabilityStatus,
    reviews = [],
    returnPolicy,
    images = [],
    thumbnail,
  } = product;

  const mainImage = thumbnail || images[0];

  const formattedPrice = price ? `$${price.toFixed(2)}` : '₹0.00';
  const originalPrice = discountPercentage
    ? `$${(price / (1 - discountPercentage / 100)).toFixed(2)}`
    : null;

  const avgRating = rating || 0;
  const reviewCount = reviews.length;

  const getAvailabilityColor = (status) => {
    if (!status) return 'text-gray-600 bg-gray-100';
    if (status.toLowerCase().includes('low')) return 'text-amber-700 bg-amber-100';
    if (status.toLowerCase().includes('out')) return 'text-red-700 bg-red-100';
    return 'text-green-700 bg-green-100';
  };

  const availabilityClass = getAvailabilityColor(availabilityStatus);

  return (
    <div className="group flex flex-col rounded-xl border border-gray-200 bg-white shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 overflow-hidden cursor-pointer">
      {/* Image */}
      <div className="relative bg-gray-50">
        {discountPercentage && (
          <div className="absolute top-2 left-2 flex items-center gap-1 rounded-full bg-red-500 px-2 py-1 text-[10px] font-semibold text-white shadow">
            <FaTag className="h-3 w-3" />
            <span>{discountPercentage.toFixed(1)}% OFF</span>
          </div>
        )}

        {availabilityStatus && (
          <div
            className={`absolute top-2 right-2 rounded-full px-2 py-1 text-[9px] font-semibold shadow-sm flex items-center gap-1 bg-white ${availabilityClass}`}
          >
            <FaBoxOpen className="h-3 w-3" />
            <span className="max-w-[80px] truncate">{availabilityStatus}</span>
          </div>
        )}

        <img
          src={mainImage}
          alt={title}
          className="h-40 sm:h-52 w-full object-contain p-3 transition-transform duration-300 group-hover:scale-105"
          loading="lazy"
        />
      </div>

      {/* Content */}
      <div className="flex flex-col gap-2 p-3 sm:p-4">
        {/* Title & Brand */}
        <div>
          <div className="flex flex-wrap items-center gap-2 mb-1">
            {brand && (
              <span className="text-[10px] font-semibold uppercase tracking-wide text-green-700 bg-green-50 px-2 py-0.5 rounded-full">
                {brand}
              </span>
            )}
            {category && (
              <span className="text-[9px] font-medium uppercase tracking-wide text-gray-600 bg-gray-100 px-2 py-0.5 rounded-full">
                {category}
              </span>
            )}
          </div>
          <h3 className="text-xs sm:text-sm font-semibold text-gray-900 line-clamp-2">
            {title}
          </h3>
        </div>

        {/* Rating + Reviews */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-1">
            <div className="flex items-center text-yellow-400 text-[10px] sm:text-xs">
              {Array.from({ length: 5 }).map((_, i) =>
                i < Math.round(avgRating) ? (
                  <FaStar key={i} className="h-3 w-3" />
                ) : (
                  <FaRegStar key={i} className="h-3 w-3" />
                )
              )}
            </div>
            <span className="text-[11px] sm:text-xs font-semibold text-gray-800">
              {avgRating.toFixed(1)}
            </span>
            {reviewCount > 0 && (
              <span className="text-[10px] text-gray-500 hidden xs:inline">
                ({reviewCount} reviews)
              </span>
            )}
          </div>

          {stock !== undefined && (
            <div className="flex items-center gap-1 text-[10px] sm:text-[11px] text-gray-600">
              <FaBox className="h-3 w-3" />
              <span>Stock: {stock}</span>
            </div>
          )}
        </div>

        {/* Collapsible header (arrow + price) */}
        <button
          type="button"
          onClick={() => setIsDetailsOpen((prev) => !prev)}
          className="flex items-center justify-between w-full mt-1 pb-1 "
        >
          <div className="space-y-0.5 text-left">
            <div className="flex items-baseline gap-2">
              <span className="text-base sm:text-lg font-bold text-gray-900">
                {formattedPrice}
              </span>
              {originalPrice && (
                <span className="text-[10px] sm:text-xs text-gray-500 line-through">
                  {originalPrice}
                </span>
              )}
            </div>
            {discountPercentage && (
              <span className="text-[10px] sm:text-xs font-semibold text-red-600">
                Save {discountPercentage.toFixed(1)}%
              </span>
            )}
          </div>

          <FaChevronDown
            className={`h-4 w-4 text-gray-500 transition-transform duration-200 ${
              isDetailsOpen ? 'rotate-180' : ''
            }`}
          />
        </button>

        {/* Collapsible details */}
        <div
          className={`overflow-hidden transition-all duration-200 ${
            isDetailsOpen ? 'max-h-96 opacity-100 mt-2' : 'max-h-0 opacity-0'
          }`}
        >
          {/* Description */}
          <p className="text-[11px] sm:text-xs text-gray-600 leading-relaxed mb-2">
            {description}
          </p>

          {/* Tags / Meta */}
          <div className="flex flex-wrap gap-1.5 mb-2">
            {tags.slice(0, 3).map((tag) => (
              <span
                key={tag}
                className="text-[9px] font-medium text-gray-700 bg-gray-100 px-2 py-0.5 rounded-full"
              >
                #{tag}
              </span>
            ))}
            {sku && (
              <span className="text-[9px] text-gray-500 bg-gray-50 px-2 py-0.5 rounded-full">
                SKU: {sku}
              </span>
            )}
            {weight && (
              <span className="text-[9px] text-gray-500 bg-gray-50 px-2 py-0.5 rounded-full">
                {weight}g
              </span>
            )}
          </div>
        </div>

        {/* Bottom Actions (always visible) */}
        <div className="flex items-center justify-between pt-2 ">
          <button className="flex items-center justify-center gap-2 rounded-full bg-green-600 hover:bg-green-700 text-white text-xs sm:text-sm font-semibold px-3 sm:px-4 py-1.5 sm:py-2 shadow-sm hover:shadow-md transition-all duration-200 w-full sm:w-auto">
            <FaCartPlus className="h-4 w-4" />
            <span>Add to Cart</span>
          </button>

          <button className="ml-2 flex items-center justify-center gap-1 rounded-full border border-gray-200 bg-white hover:bg-pink-50 text-gray-600 hover:text-pink-600 text-[11px] sm:text-xs font-medium px-3 py-1.5 transition-all duration-200">
            <FaHeart className="h-3 w-3" />
            <span>Wishlist</span>
          </button>
        </div>

      </div>
    </div>
  );
};

export default ProductCard;
