"use client";

import { useGetTodayHotDealsQuery } from "@/redux/api/commonApi";
import Image from "next/image";
import React, { useState } from "react";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";

const HotDealsSection = () => {
  const { data } = useGetTodayHotDealsQuery();
  const todayHotDeals = data?.data || [];

  const [currentSlide, setCurrentSlide] = useState(0);

  const totalSlides = todayHotDeals.length;

  const nextSlide = () => {
    if (!totalSlides) return;
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  };

  const prevSlide = () => {
    if (!totalSlides) return;
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  return (
    <div className="w-full bg-linear-to-b from-gray-50 to-white py-12 sm:px-6 lg:px-8">
      <div className="container">
        {/* Header */}
        <div className="text-center mb-10">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-2">
            TODAY HOT DEALS
          </h2>
          <div className="w-24 h-1 bg-orange-500 mx-auto rounded-full" />
        </div>

        {/* Desktop Grid */}
        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {todayHotDeals.map((deal) => {
            const product = deal.product;

            const imageSrc = product?.primary_image?.image
              ? `${process.env.NEXT_PUBLIC_API_URL}/storage/${product.primary_image.image}`
              : "/placeholder.png";

            return (
              <div
                key={deal.id}
                className="bg-white rounded-2xl overflow-hidden transition-all duration-300 hover:-translate-y-2 cursor-pointer"
              >
                <div className="relative bg-gray-100 aspect-square overflow-hidden">
                  <Image
                    src={imageSrc}
                    alt={product?.name || "Product"}
                    width={500}
                    height={500}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                  />
                  <span className="absolute top-4 right-4 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    HOT
                  </span>
                </div>

                <div className="p-6">
                  <p className="text-sm text-gray-500 mb-2">
                    {product?.category?.name}
                  </p>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3 line-clamp-2">
                    {product?.name}
                  </h3>
                  <p className="text-2xl font-bold text-orange-500">
                    ${product?.base_price}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Mobile Slider */}
        <div className="md:hidden relative mb-8">
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {todayHotDeals.map((deal) => {
                const product = deal.product;

                const imageSrc = product?.primary_image?.image
                  ? `${process.env.NEXT_PUBLIC_API_URL}/storage/${product.primary_image.image}`
                  : "/placeholder.png";

                return (
                  <div key={deal.id} className="w-full shrink-0 px-2">
                    <div className="bg-white rounded-2xl overflow-hidden">
                      <div className="relative bg-gray-100 aspect-square overflow-hidden">
                        <Image
                          src={imageSrc}
                          alt={product?.name || "Product"}
                          width={500}
                          height={500}
                          className="w-full h-full object-cover"
                        />
                        <span className="absolute top-4 right-4 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                          HOT
                        </span>
                      </div>

                      <div className="p-6">
                        <p className="text-sm text-gray-500 mb-2">
                          {product?.category?.name}
                        </p>
                        <h3 className="text-lg font-semibold text-gray-900 mb-3">
                          {product?.name}
                        </h3>
                        <p className="text-2xl font-bold text-orange-500">
                          ${product?.base_price}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Controls */}
          {totalSlides > 1 && (
            <>
              <button
                onClick={prevSlide}
                className="absolute left-0 top-1/2 -translate-y-1/2 bg-white p-2 rounded-full shadow"
              >
                <BsChevronLeft className="w-6 h-6" />
              </button>

              <button
                onClick={nextSlide}
                className="absolute right-0 top-1/2 -translate-y-1/2 bg-white p-2 rounded-full shadow"
              >
                <BsChevronRight className="w-6 h-6" />
              </button>
            </>
          )}

          {/* Dots */}
          <div className="flex justify-center gap-2 mt-6">
            {todayHotDeals.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`h-2 rounded-full transition-all ${
                  currentSlide === index
                    ? "bg-orange-500 w-8"
                    : "bg-gray-300 w-2"
                }`}
              />
            ))}
          </div>
        </div>

        {/* View All */}
        <div className="text-center">
          <button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-full font-semibold transition">
            VIEW ALL DEALS
          </button>
        </div>
      </div>
    </div>
  );
};

export default HotDealsSection;
