"use client";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import React, { useRef, useState, useEffect } from "react";
import ProductCard from "@/components/common/ProductCard";

const RelatedProducts = ({ relatedProduct }) => {
  const swiperRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(null); // For hover state
  const [isDesktop, setIsDesktop] = useState(false); // Track big screen

  // Update isDesktop on window resize
  useEffect(() => {
    const handleResize = () => setIsDesktop(window.innerWidth >= 1280); // >=1280px considered desktop
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

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

        <div className="max-w-325 mx-auto relative my-10">
          {isDesktop ? (
            // If desktop, show all 4 products statically
            <div className="grid grid-cols-4 gap-4">
              {relatedProduct?.slice(0, 4).map((product, index) => (
                <ProductCard
                  key={index}
                  product={product}
                  isActive={activeIndex === index}
                  onHover={() => setActiveIndex(index)}
                  onLeave={() => setActiveIndex(null)}
                />
              ))}
            </div>
          ) : (
            // Otherwise, show Swiper
            <>
              <Swiper
                ref={swiperRef}
                slidesPerView={1}
                spaceBetween={10}
                loop={true}
                speed={500}
                centeredSlides={true}
                breakpoints={{
                  640: { slidesPerView: 1, spaceBetween: 8 },
                  768: { slidesPerView: 2, spaceBetween: 8 },
                  1024: { slidesPerView: 3, spaceBetween: 8 },
                }}
                modules={[Pagination, Navigation]}
                className="mySwiper overflow-hidden w-full mx-auto flex justify-center items-center"
              >
                {relatedProduct?.map((product, index) => (
                  <SwiperSlide
                    className="py-3 px-2 mx-auto flex justify-center items-center w-full text-center"
                    key={index}
                  >
                    <ProductCard
                      key={index}
                      product={product}
                      isActive={activeIndex === index}
                      onHover={() => setActiveIndex(index)}
                      onLeave={() => setActiveIndex(null)}
                    />
                  </SwiperSlide>
                ))}
              </Swiper>

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
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default RelatedProducts;
