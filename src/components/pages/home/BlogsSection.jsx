"use client";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import Link from "next/link";
import React, { useRef, useState, useEffect } from "react";
import BlogCard from "@/components/common/BlogCard";
import { blogPosts } from "@/utils/db/blogs_data";

const BlogsSection = () => {
  const swiperRef = useRef(null);
  const [showArrows, setShowArrows] = useState(false);

  // Check if we have more than 3 blog posts
  useEffect(() => {
    setShowArrows(blogPosts?.length > 3);
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
    <div className="container">
      <div className="py-4">
        <div className="border-b-2 flex justify-center items-center border-gray-200 mb-4">
          <h2 className="text-black relative text-lg md:text-2xl font-medium md:font-semibold text-center py-2 uppercase">
            OUR BLOG & ARTICLES
            <span className="absolute left-0 -bottom-[1px] h-0.5 w-full bg-primary-base"></span>
          </h2>
        </div>

        <div className="max-w-325 mx-auto relative">
          {/* Swiper */}
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
                  spaceBetween: 20,
                },
                768: {
                  slidesPerView: 2,
                  spaceBetween: 20,
                },
                1024: {
                  slidesPerView: 3,
                  spaceBetween: 30,
                },
                1280: {
                  slidesPerView: 3,
                  spaceBetween: 30,
                },
                1536: {
                  slidesPerView: 3,
                  spaceBetween: 40,
                },
              }}
              modules={[Pagination, Navigation]}
              className="mySwiper overflow-hidden w-full mx-auto flex justify-center items-center"
            >
              {blogPosts?.map((product, index) => (
                <SwiperSlide
                  className="py-3 px-2 mx-auto flex justify-center items-center w-full text-center"
                  key={index}
                >
                  <BlogCard blog={product} />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

          {/* Arrow buttons - Conditionally rendered */}
          {showArrows && (
            <div className="arrow absolute top-1/2 z-30 w-full">
              <div className="flex justify-between items-center">
                <div
                  className="flex cursor-pointer justify-center items-center shadow h-10 md:h-12.5 w-10 md:w-12.5 bg-primary-muted hover:bg-primary-base duration-150 hover:text-white rounded-full"
                  onClick={goPrev}
                >
                  <IoIosArrowBack size={22} />
                </div>
                <div
                  className="flex cursor-pointer justify-center items-center shadow h-10 md:h-12.5 w-10 md:w-12.5 bg-primary-muted hover:bg-primary-base duration-150 hover:text-white rounded-full"
                  onClick={goNext}
                >
                  <IoIosArrowForward size={22} />
                </div>
              </div>
            </div>
          )}
        </div>
        
        <div className="pt-5 text-center">
          <Link
            href={"/blog"}
            className="btn text-center text-sm md:text-base font-medium"
          >
            View more
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BlogsSection;