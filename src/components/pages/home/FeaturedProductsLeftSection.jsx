"use client";
import { useGetTopPricingProductQuery } from "@/redux/api/commonApi";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaHeart, FaShoppingCart } from "react-icons/fa";

const FeaturedProductsSection = () => {
  const { data } = useGetTopPricingProductQuery();

  const products = data?.data || [];
  const product = data?.topProductByCategory || [];

  return (
    <div className="w-full bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Hero Banner */}
        <div className="mb-8 relative rounded overflow-hidden shadow">
          <div className="relative h-64 sm:h-80 ">
            {/* Background Image */}
            <div className="absolute inset-0 overflow-hidden p-10">
              <Image
                      width={350}
                      height={350}
                      src={
                        product?.primary_image?.image
                          ? `${process.env.NEXT_PUBLIC_API_URL}/storage/${product.primary_image.image}`
                          : "/placeholder.png"
                      }
                alt="Mobile Bag Background"
                className="w-full h-64  object-cover transition-transform duration-500 hover:scale-110"
              />
              {/* Overlay for better text visibility */}
              <div className="absolute inset-0to-transparent"></div>
            </div>

            {/* Content Over Image */}
            <div className="absolute inset-0 bg-[#00000049] flex items-center justify-start p-4">
              <div className="z-10 max-w-md">
                <p className="text-sm sm:text-base text-white font-medium mb-2">
                  {product?.category?.name}
                </p>
                <h1 className=" text-lg md:text-3xl  font-bold text-white mb-4 leading-tight drop-shadow-lg">
                 {product?.name}
                </h1>

                <Link  href={`/product/${product?.slug}`} className="bg-white mt-2 text-gray-800 font-semibold px-6 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                  READ MORE
                </Link>
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
              <Link
                key={product.id}
                href={`/product/${product?.slug}`}
                className="bg-white block rounded shadow hover:shadow-md transition-all duration-300 overflow-hidden group"
              >
                <div className="flex flex-col sm:flex-row gap-4 p-4">
                  {/* Product Image */}
                  <div className="relative w-full sm:w-25 h-25  shrink-0 bg-gray-100 rounded-lg overflow-hidden">
                    <Image
                      width={250}
                      height={250}
                      src={
                        product?.primary_image?.image
                          ? `${process.env.NEXT_PUBLIC_API_URL}/storage/${product.primary_image.image}`
                          : "/placeholder.png"
                      }
                      alt={product?.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <button className="absolute top-2 right-2 bg-white rounded-full p-2 shadow-md hover:bg-red-50 transition-colors">
                      <FaHeart className="w-3 h-3 text-black hover:text-red-500" />
                    </button>
                  </div>

                  {/* Product Details */}
                  <div className="flex-1 flex flex-col justify-between">
                    <div>
                      <p className="text-sm  font-medium text-gray-800 mb-2 line-clamp-3 leading-snug">
                        {product?.name}
                      </p>

                      {/* Rating */}
                      <div className="flex items-center gap-1 mb-2">
                        <span className="text-xs text-gray-500 ml-1">
                          {product?.category?.name}
                        </span>
                      </div>
                    </div>

                    {/* Price and Action */}
                    <div className="flex items-center justify-between mt-2">
                      <p className="text-xl  font-bold text-orange-500">
                        ${product?.base_price}
                      </p>
                      <button className="bg-primary-base hover:bg-primary-base text-white px-4 py-2 rounded-lg flex items-center gap-2 transition-colors duration-300 shadow-md hover:shadow-lg">
                        <FaShoppingCart className="w-4 h-4" />
                        <span className="text-sm font-medium">Add</span>
                      </button>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedProductsSection;
