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
import { useGetBlogsQuery } from "@/redux/api/commonApi";

const BlogsSection = () => {
  const swiperRef = useRef(null);
  const { data } = useGetBlogsQuery();
  const blogPosts = data?.data?.data || [];

  const [showArrows, setShowArrows] = useState(false);

  useEffect(() => {
    setShowArrows(blogPosts.length > 3);
  }, [blogPosts]);

  const goNext = () => swiperRef.current?.swiper.slideNext();
  const goPrev = () => swiperRef.current?.swiper.slidePrev();

  return (
    <div className="container">
      <div className="py-10">
        <div className="border-b-2 flex justify-center items-center border-gray-200 mb-4">
          {" "}
          <h2 className="text-black relative text-lg md:text-2xl font-medium md:font-semibold text-center py-2 uppercase">
            {" "}
            OUR BLOG & ARTICLES{" "}
            <span className="absolute left-0 -bottom-px h-0.5 w-full bg-primary-base"></span>{" "}
          </h2>{" "}
        </div>

        <div className="relative">
          <Swiper
            ref={swiperRef}
            loop={blogPosts.length > 3}
            speed={500}
            spaceBetween={16}
            breakpoints={{
              0: {
                slidesPerView: 1,
                centeredSlides: true,
              },
              768: {
                slidesPerView: 2,
                centeredSlides: false,
              },
              1024: {
                slidesPerView: 3,
                centeredSlides: false,
              },
            }}
            modules={[Pagination, Navigation]}
            className="w-full"
          >
            {blogPosts.map((item, index) => (
              <SwiperSlide key={index} className="py-3">
                <BlogCard blog={item} />
              </SwiperSlide>
            ))}
          </Swiper>

          {showArrows && (
            <div className="absolute top-1/2 left-0 w-full -translate-y-1/2 z-20 px-2">
              <div className="flex justify-between">
                <button
                  onClick={goPrev}
                  className="h-10 w-10 md:h-12 md:w-12 rounded-full bg-primary-muted hover:bg-primary-base hover:text-white shadow flex items-center justify-center"
                >
                  <IoIosArrowBack size={22} />
                </button>

                <button
                  onClick={goNext}
                  className="h-10 w-10 md:h-12 md:w-12 rounded-full bg-primary-muted hover:bg-primary-base hover:text-white shadow flex items-center justify-center"
                >
                  <IoIosArrowForward size={22} />
                </button>
              </div>
            </div>
          )}
        </div>

        <div className="pt-5 text-center">
          <Link href="/blog" className="btn hover:text-primary-base text-sm md:text-base font-medium">
            View more
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BlogsSection;
