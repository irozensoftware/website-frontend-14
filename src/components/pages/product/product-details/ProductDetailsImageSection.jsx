"use client";
import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import Image from "next/image";
import { GoChevronLeft, GoChevronRight } from "react-icons/go";

const ProductDetailsImageSection = () => {
  const [mainImage, setMainImage] = useState(
    "https://falaqfood.com/wp-content/uploads/2024/09/new-design-for-falaq-food1454.jpg"
  );

  const images = [
    "https://falaqfood.com/wp-content/uploads/2024/10/Honey-Nut-%E0%A6%B9%E0%A6%BE%E0%A6%A8%E0%A6%BF-%E0%A6%A8%E0%A6%BE%E0%A6%9F-20444.jpg",
    "https://falaqfood.com/wp-content/uploads/2024/09/bain-fuler-modhu.jpg4647884.jpg",
    "https://falaqfood.com/wp-content/uploads/2023/08/kalojira-fuler-modhu-666-2048x2048.jpg",
    "https://falaqfood.com/wp-content/uploads/2024/11/%E0%A6%AC%E0%A7%8D%E0%A6%B2%E0%A6%BE%E0%A6%95-%E0%A6%97%E0%A6%BE%E0%A6%B0%E0%A7%8D%E0%A6%B2%E0%A6%BF%E0%A6%95-20244.jpg",
    "https://falaqfood.com/wp-content/uploads/2024/11/%E0%A6%AC%E0%A7%8D%E0%A6%B2%E0%A6%BE%E0%A6%95-%E0%A6%97%E0%A6%BE%E0%A6%B0%E0%A7%8D%E0%A6%B2%E0%A6%BF%E0%A6%95-20244.jpg",
    "https://falaqfood.com/wp-content/uploads/2024/11/%E0%A6%AC%E0%A7%8D%E0%A6%B2%E0%A6%BE%E0%A6%95-%E0%A6%97%E0%A6%BE%E0%A6%B0%E0%A7%8D%E0%A6%B2%E0%A6%BF%E0%A6%95-20244.jpg",
  ];

  const prevRef = useRef(null);
  const nextRef = useRef(null);

  const handleImageClick = (src) => {
    setMainImage(src);
  };

  return (
    <div className="w-full max-w-md mx-auto">
      {/* Main Product Image */}
      <div className="border  overflow-hidden">
        <Image
          src={mainImage}
          alt="Product"
          width={500}
          height={500}
          className="w-full h-[400px] object-cover transition-transform duration-300 hover:scale-105"
        />
      </div>

      {/* Thumbnail Slider */}
      <div className=" relative mt-4">
        {/* Custom Navigation Buttons */}
        <button
          ref={prevRef}
          className="absolute -left-5 top-1/2 transform -translate-y-1/2 z-10 bg-[#F7F7F7]  rounded p-2 hover:bg-gray-100"
        >
          <GoChevronLeft className="w-4 h-4 text-gray-600" />
        </button>

        <button
          ref={nextRef}
          className="absolute -right-4 top-1/2 transform -translate-y-1/2 z-10 bg-[#F7F7F7]  rounded p-2 hover:bg-gray-100"
        >
          <GoChevronRight className="w-4 h-4 text-gray-600" />
        </button>

        {/* Swiper Thumbnails */}
        <Swiper
          spaceBetween={10}
          slidesPerView={4}
          modules={[Navigation]}
          onInit={(swiper) => {
            swiper.params.navigation.prevEl = prevRef.current;
            swiper.params.navigation.nextEl = nextRef.current;
            swiper.navigation.init();
            swiper.navigation.update();
          }}
          className="product-thumbs"
        >
          {images.map((src, index) => {
            const isActive = mainImage === src;
            return (
              <SwiperSlide key={index}>
                <div
                  className={`relative cursor-pointer border transition duration-300 `}
                  onClick={() => handleImageClick(src)}
                >
                  {/* Image */}
                  <Image
                    src={src}
                    alt={`Thumbnail ${index}`}
                    width={100}
                    height={100}
                    className="w-full h-[80px] object-cover"
                  />

                  {/* Opacity Overlay on Active */}
                  {isActive && (
                    <div className="absolute top-0 w-full h-full inset-0 bg-[#ffffff81] "></div>
                  )}
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </div>
  );
};

export default ProductDetailsImageSection;
