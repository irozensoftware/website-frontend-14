import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaHeart, FaShoppingCart } from "react-icons/fa";

const FeaturedProductsSection = () => {
  const products = [
    {
      id: 1,
      title:
        "Food Bowl Color Thick Legs High Feet Stable Bowl Grade Food Water Supplies 4-color Dog Food Drop Anti Eat Dish P Ml13",
      price: "$8.71",
      image:
        "https://images.unsplash.com/photo-1589924691995-400dc9ecc119?w=400&h=400&fit=crop",
      rating: 4.5,
    },
    {
      id: 2,
      title:
        "Pet Hair Remover Mitt static Deshedding Brush Glove Double-Sided Cleaning Tool for Dog Cat Rabbit with Long/Short/Curly Hair",
      price: "$13.37",
      image:
        "https://images.unsplash.com/photo-1548681528-6a5c45b66b42?w=400&h=400&fit=crop",
      rating: 4.8,
    },
    {
      id: 3,
      title:
        "Premium Dog Leash Adjustable Training Collar Set with Reflective Stitching",
      price: "$15.99",
      image:
        "https://images.unsplash.com/photo-1601758228041-f3b2795255f1?w=400&h=400&fit=crop",
      rating: 4.6,
    },
    {
      id: 4,
      title: "Interactive Cat Toy with Feather Wand and Bell for Indoor Cats",
      price: "$9.49",
      image:
        "https://images.unsplash.com/photo-1545249390-6bdfa286032f?w=400&h=400&fit=crop",
      rating: 4.7,
    },
  ];

  return (
    <div className="w-full bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Hero Banner */}
       <div className="mb-8 relative rounded overflow-hidden shadow">
          <div className="relative h-64 sm:h-80 ">
            {/* Background Image */}
            <div className="absolute inset-0 overflow-hidden p-10">
              <img
                src="https://4.imimg.com/data4/XO/UJ/MY-20998809/luggage-travel-bag.jpg"
                alt="Mobile Bag Background"
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
              />
              {/* Overlay for better text visibility */}
              <div className="absolute inset-0to-transparent"></div>
            </div>

            {/* Content Over Image */}
            <div className="absolute inset-0 bg-[#00000049] flex items-center justify-start p-4">
              <div className="z-10 max-w-md">
                <p className="text-sm sm:text-base text-white font-medium mb-2">
                  High Tech
                </p>
                <h1 className="text-3xl sm:text-4xl  font-bold text-white mb-4 leading-tight drop-shadow-lg">
                  Hang Your<br />Mobile
                </h1>
            
                <button className="bg-white text-gray-800 font-semibold px-6 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                  READ MORE
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Featured Products Header */}
        <div className="bg-linear-to-r from-primary-base to-primary-base rounded py-4 px-6 shadow-lg">
          <h2 className="text-2xl  font-bold text-white tracking-wide">
            FEATURED PRODUCTS
          </h2>
        </div>

        {/* Products Grid */}
        <div className=" rounded-b-2xl pt-4">
          <div className="space-y-4">
            {products.map((product) => (
              <div
                key={product.id}
                className="bg-white rounded shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden group"
              >
                <div className="flex flex-col sm:flex-row gap-4 p-4">
                  {/* Product Image */}
                  <div className="relative w-full sm:w-25 h-25  flex-shrink-0 bg-gray-100 rounded-lg overflow-hidden">
                    <img
                      src={product.image}
                      alt={product.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <button className="absolute top-2 right-2 bg-white rounded-full p-2 shadow-md hover:bg-red-50 transition-colors">
                      <FaHeart className="w-3 h-3 text-black hover:text-red-500" />
                    </button>
                  </div>

                  {/* Product Details */}
                  <div className="flex-1 flex flex-col justify-between">
                    <div>
                      <Link href={'/'} className="text-sm  font-medium text-gray-800 mb-2 line-clamp-3 leading-snug">
                        {product.title}
                      </Link>

                      {/* Rating */}
                      <div className="flex items-center gap-1 mb-2">
                        {[...Array(5)].map((_, i) => (
                          <svg
                            key={i}
                            className={`w-4 h-4 ${
                              i < Math.floor(product.rating)
                                ? "text-yellow-400"
                                : "text-gray-300"
                            }`}
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        ))}
                        <span className="text-xs text-gray-500 ml-1">
                          ({product.rating})
                        </span>
                      </div>
                    </div>

                    {/* Price and Action */}
                    <div className="flex items-center justify-between mt-2">
                      <p className="text-xl  font-bold text-orange-500">
                        {product.price}
                      </p>
                      <button className="bg-primary-base hover:bg-primary-base text-white px-4 py-2 rounded-lg flex items-center gap-2 transition-colors duration-300 shadow-md hover:shadow-lg">
                        <FaShoppingCart className="w-4 h-4" />
                        <span className="text-sm font-medium">Add</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* View More Button */}
          <div className="text-center mt-6">
            <button className="bg-linear-to-r from-primary-base to-primary-base  text-white font-semibold px-8 py-3 rounded-full  transition-all duration-300 transform hover:scale-105">
              VIEW ALL PRODUCTS
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedProductsSection;
