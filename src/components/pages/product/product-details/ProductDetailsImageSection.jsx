"use client";
import React, { useRef, useState, useEffect, useCallback } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import Image from "next/image";
import { GoChevronLeft, GoChevronRight } from "react-icons/go";

const API_BASE = process.env.NEXT_PUBLIC_API_URL;
const FALLBACK_IMAGE = "/images/placeholder.png"; // public folder

const buildImageUrl = (path) => {
  if (!path || !API_BASE) return FALLBACK_IMAGE;
  return `${API_BASE}/storage/${path}`;
};

const ProductDetailsImageSection = ({ imagesData = [] }) => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  const [mainImage, setMainImage] = useState(FALLBACK_IMAGE);

  // ✅ Sync main image when imagesData changes
  useEffect(() => {
    if (Array.isArray(imagesData) && imagesData.length > 0) {
      setMainImage(buildImageUrl(imagesData[0]));
    } else {
      setMainImage(FALLBACK_IMAGE);
    }
  }, [imagesData]);

  // ✅ Safe click handler
  const handleImageClick = useCallback((src) => {
    if (src) setMainImage(src);
  }, []);

  // ❌ No images? Don't render slider
  if (!imagesData.length) {
    return (
      <div className="w-full max-w-md mx-auto border">
        <Image
          src={FALLBACK_IMAGE}
          alt="No product image"
          width={500}
          height={500}
          className="w-full object-cover"
        />
      </div>
    );
  }

  return (
    <div className="w-full max-w-md mx-auto">
      {/* Main Image */}
      <div className="border overflow-hidden">
        <Image
          src={mainImage}
          alt="Product image"
          width={500}
          height={500}
          priority
          className="w-full object-cover transition-transform duration-300 hover:scale-105"
          onError={() => setMainImage(FALLBACK_IMAGE)}
        />
      </div>

      {/* Thumbnails */}
      <div className="relative mt-4">
        {/* Navigation */}
        <button
          ref={prevRef}
          className="absolute -left-5 top-1/2 -translate-y-1/2 z-10 bg-[#F7F7F7] rounded p-2"
        >
          <GoChevronLeft className="w-4 h-4 text-gray-600" />
        </button>

        <button
          ref={nextRef}
          className="absolute -right-4 top-1/2 -translate-y-1/2 z-10 bg-[#F7F7F7] rounded p-2"
        >
          <GoChevronRight className="w-4 h-4 text-gray-600" />
        </button>

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
        >
          {imagesData.map((img, index) => {
            const imageUrl = buildImageUrl(img);
            const isActive = mainImage === imageUrl;

            return (
              <SwiperSlide key={index}>
                <div
                  onClick={() => handleImageClick(imageUrl)}
                  className="relative cursor-pointer border"
                >
                  <Image
                    src={imageUrl}
                    alt={`Thumbnail ${index + 1}`}
                    width={100}
                    height={100}
                    className="w-full h-20 object-cover"
                  />
                  {isActive && (
                    <div className="absolute inset-0 bg-white/50" />
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
