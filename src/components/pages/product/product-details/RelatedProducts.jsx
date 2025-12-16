"use client";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import Link from "next/link";
import React, { useRef, useState } from "react";
import ProductCard from "@/components/common/ProductCard";
import { products } from "@/utils/db/ProductDB";

const RelatedProducts = () => {
  const swiperRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(null); // To manage hover state
  const goNext = () => {
    if (swiperRef.current) {
      swiperRef.current.swiper.slideNext();
    }
  };

  const goPrev = () => {
    if (swiperRef.current) {
      swiperRef.current.swiper.slidePrev();
    }
  };

  return (
    <div className="">
      <div className="py-4">
        <h2 className="text-primary-base text-lg md:text-2xl font-medium md:font-semibold text-center py-2 uppercase">
          Related Products
        </h2>

        <div className="max-w-[1300px] mx-auto relative">
          {/* Swiper controller */}
          <div className="container">
            <Swiper
              ref={swiperRef}
              slidesPerView={1}
              spaceBetween={10}
              loop={true}
              speed={500}
              centeredSlides={true}
              breakpoints={{
                640: {
                  slidesPerView: 1,
                  spaceBetween: 8,
                },
                768: {
                  slidesPerView: 2,
                  spaceBetween: 8,
                },
                1024: {
                  slidesPerView: 3,
                  spaceBetween: 8,
                },
                1280: {
                  slidesPerView: 4,
                  spaceBetween: 8,
                },
                1536: {
                  slidesPerView: 4,
                  spaceBetween: 8,
                },
              }}
              modules={[Pagination, Navigation]}
              className="mySwiper overflow-hidden w-full mx-auto flex justify-center items-center"
            >
              {products?.map((product, index) => (
                <SwiperSlide
                  className="py-3 px-2 mx-auto flex justify-center items-center w-full text-center"
                  key={index}
                >
                  <ProductCard
                    key={index}
                    product={product}
                    isActive={activeIndex === index} // Pass active state
                    onHover={() => setActiveIndex(index)}
                    onLeave={() => setActiveIndex(null)}
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

          {/* Arrow buttons */}
          <div className="arrow absolute top-1/2 z-30 w-full">
            <div className="flex justify-between items-center">
              <div
                className="flex cursor-pointer justify-center items-center shadow h-[40px] md:h-[50px] w-[40px] md:w-[50px] bg-primary-muted hover:bg-primary-base duration-150 hover:text-white rounded-full"
                onClick={goPrev}
              >
                <IoIosArrowBack size={22} />
              </div>
              <div
                className="flex cursor-pointer justify-center items-center shadow h-[40px] md:h-[50px] w-[40px] md:w-[50px] bg-primary-muted hover:bg-primary-base duration-150 hover:text-white rounded-full"
                onClick={goNext}
              >
                <IoIosArrowForward size={22} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
5;

export default RelatedProducts;
