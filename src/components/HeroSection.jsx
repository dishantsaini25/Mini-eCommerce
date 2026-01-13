// src/components/HeroSlider.jsx
import React from 'react';
import Slider from 'react-slick';

const HeroSlider = ({ products = [] }) => {
  if (!products.length) return null;

  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 2500,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    pauseOnHover: true,
    adaptiveHeight: false,
  };

  const heroProducts = products.slice(0, 9);

  const chunks = [];
  for (let i = 0; i < heroProducts.length; i += 3) {
    chunks.push(heroProducts.slice(i, i + 3));
  }

  return (
    <section className="w-full bg-gray-50">
      <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-6 py-4 sm:py-6">
        {/* Heading */}
        <div className="mb-3 sm:mb-4 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-1 sm:gap-2 px-1 sm:px-0">
          <div>
            <h2 className="text-lg sm:text-2xl lg:text-3xl font-bold text-gray-900">
              Featured Collections
            </h2>
            <p className="text-xs sm:text-sm text-gray-500">
              Discover popular picks from QuickCart right now.
            </p>
          </div>
        </div>

        <div className="rounded-2xl overflow-hidden shadow-md bg-white">
          <Slider {...settings}>
            {chunks.map((group, index) => (
              <div key={index}>
                <div className="flex items-stretch justify-center gap-2 sm:gap-4 px-2 sm:px-4 py-4 sm:py-6 bg-gradient-to-r from-green-50 via-white to-green-50">
                  {group.map((product) => {
                    const img = product.images?.[0] || product.thumbnail;
                    return (
                      <div
                        key={product.id}
                        className="flex-1 flex flex-col items-center justify-start"
                      >
                        <div className="w-full flex items-center justify-center">
                          <img
                            src={img}
                            alt={product.title}
                            className="w-full max-w-[190px] sm:max-w-[230px] md:max-w-[260px] h-32 sm:h-40 md:h-48 object-contain bg-white rounded-xl shadow-sm p-2 sm:p-3"
                            loading="lazy"
                          />
                        </div>
                        <p className="mt-2 text-[11px] sm:text-sm font-medium text-gray-800 text-center line-clamp-2 px-1">
                          {product.title}
                        </p>
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default HeroSlider;
