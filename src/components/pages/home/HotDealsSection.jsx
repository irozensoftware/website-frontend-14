"use client"
import Image from 'next/image';
import React, { useState } from 'react';
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";

const HotDealsSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const deals = [
    {
      id: 1,
      title: "Car Phone Holder Air...",
      category: "Car Accessories",
      price: "$4.96",
      image: "https://images.unsplash.com/photo-1588508065123-287b28e013da?w=400&h=400&fit=crop"
    },
    {
      id: 2,
      title: "46pcs Car Repair Tool Kit...",
      category: "Car Accessories",
      price: "$34.69",
      image: "https://images.unsplash.com/photo-1530124566582-a618bc2615dc?w=400&h=400&fit=crop"
    },
    {
      id: 3,
      title: "Car Hand Tool Set Car...",
      category: "Car Accessories",
      price: "$4.96",
      image: "https://images.unsplash.com/photo-1581235720704-06d3acfcb36f?w=400&h=400&fit=crop"
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % deals.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + deals.length) % deals.length);
  };

  return (
    <div className="w-full bg-linear-to-b from-gray-50 to-white py-12 sm:px-6 lg:px-8">
      <div className="container">
        {/* Header */}
        <div className="text-center mb-10">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-2">
            TODAY HOT DEALS
          </h2>
          <div className="w-24 h-1 bg-orange-500 mx-auto rounded-full"></div>
        </div>

        {/* Desktop Grid View */}
        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {deals.map((deal) => (
            <div
              key={deal.id}
              className="bg-white rounded-2xl transition-all duration-300 overflow-hidden group cursor-pointer transform hover:-translate-y-2"
            >
              <div className="relative overflow-hidden bg-gray-100 aspect-square">
                <Image
                  src={deal.image}
                  alt={deal.title}
                  width={1000}
                  height={500}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 right-4 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                  HOT
                </div>
              </div>
              <div className="p-6">
                <p className="text-sm text-gray-500 mb-2">{deal.category}</p>
                <h3 className="text-lg font-semibold text-gray-900 mb-3 line-clamp-2">
                  {deal.title}
                </h3>
                <p className="text-2xl font-bold text-orange-500">{deal.price}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile Slider View */}
        <div className="md:hidden relative mb-8">
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {deals.map((deal) => (
                <div key={deal.id} className="w-full shrink-0 px-2">
                  <div className="bg-white rounded-2xl shadow overflow-hidden">
                    <div className="relative overflow-hidden bg-gray-100 aspect-square">
                      <Image
                        src={deal.image}
                        alt={deal.title}
                        className="w-full h-full object-cover"
                        width={1000}
                        height={500}
                      />
                      <div className="absolute top-4 right-4 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                        HOT
                      </div>
                    </div>
                    <div className="p-6">
                      <p className="text-sm text-gray-500 mb-2">{deal.category}</p>
                      <h3 className="text-lg font-semibold text-gray-900 mb-3">
                        {deal.title}
                      </h3>
                      <p className="text-2xl font-bold text-orange-500">{deal.price}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Slider Controls */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-2 bg-white rounded-full p-2 shadow-lg hover:bg-gray-100 transition-colors z-10"
            aria-label="Previous slide"
          >
            <BsChevronLeft className="w-6 h-6 text-gray-700" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-2 bg-white rounded-full p-2 shadow-lg hover:bg-gray-100 transition-colors z-10"
            aria-label="Next slide"
          >
            <BsChevronRight className="w-6 h-6 text-gray-700" />
          </button>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-2 mt-6">
            {deals.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  currentSlide === index
                    ? 'bg-orange-500 w-8'
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* View All Button */}
        <div className="text-center">
          <button className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-8 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
            VIEW ALL DEALS
          </button>
        </div>
      </div>
    </div>
  );
};

export default HotDealsSection;