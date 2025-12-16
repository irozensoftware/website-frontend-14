"use client";
// pages/product/[id].js
import { useState } from "react";
import { FaRegHeart } from "react-icons/fa";
import { PiShareNetworkFill } from "react-icons/pi";

import ProductHeader from "./ProductHeader";
import { FaStar } from "react-icons/fa";
import Link from "next/link";
import { FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
import { IoLogoYoutube } from "react-icons/io5";
import ProductDetailsAndReview from "./ProductDetailsAndReview";
import RelatedProducts from "./RelatedProducts";
import ProductDetailsImageSection from "./ProductDetailsImageSection";

export default function ProductInfo() {
  const [value, setValue] = useState(1);
  const increment = () => setValue((prev) => prev + 1);
  const decrement = () => setValue((prev) => (prev > 1 ? prev - 1 : 1));


  return (
    <>
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Image Section */}
          <div>
          <ProductDetailsImageSection/>
          
          </div>

          {/* Product Details */}
          <div>
            <ProductHeader />
            <div className="pt-5">
              <h1 className=" text-base md:text-lg xl:text-xl 2xl:text-2xl font-medium mb-4">
                কালোজিরা ফুলের মধু (Premium Blackseed Flower Honey)
              </h1>
              
              <div className="flex items-center gap-3 py-2">
                <p className="text-gray-500 text-base md:text-xl line-through">
                  ৳1,800
                </p>
                <p className="text-base md:text-xl text-green-600  font-semibold">
                  ৳1,200
                </p>
              </div>
              <p className="mb-6 text-sm text-black-muted">
                মধুময় বাদাম হল এক প্রাকৃতিক, স্বাস্থ্যসম্মত এবং স্বাদে পরিপূর্ণ
                খাবার, যা আপনার প্রতিদিনের স্ন্যাকিং-এর জন্য আদর্শ। শুদ্ধ মধুর
                সুমিষ্টতা এবং প্রিমিয়াম মানের বাদামের পুষ্টিগুণ একত্রিত করে তৈরি
                করা হয়েছে এই অনন্য খাবারটি।
              </p>
              <div className="flex items-center space-x-4 mb-6">
                <div className="flex items-center">
                  <button
                    onClick={decrement}
                    className="hover:bg-primary-base hover:border-primary-base hover:text-white text-black-muted duration-200 border border-black-muted px-2 py-1 text-2xl"
                  >
                    -
                  </button>

                  <input
                    type="number"
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                    min={1}
                    className="w-6.75 text-center py-2 outline-0 border-t border-b border-black-base no-spinner"
                  />

                  <button
                    onClick={increment}
                    className="hover:bg-primary-base hover:border-primary-base hover:text-white text-black-muted border border-black-muted px-2 py-1 text-2xl"
                  >
                    +
                  </button>
                </div>
                <div className="flex gap-3">
                  <button className="bg-primary-base text-sm font-semibold text-white px-4 py-3 rounded transition-all duration-300 ease-in-out hover:bg-orange-500 hover:scale-105 shadow-md">
                    Add to Cart
                  </button>
                  
                </div>
              </div>
              <div className="flex items-center gap-3 pb-3">
                <Link
                  href={"/"}
                  className="flex items-center gap-2 text-black-base hover:text-black-muted duration-200"
                >
                  <PiShareNetworkFill className="text-lg" />
                  <span className="text-sm font-medium">Compare</span>
                </Link>
                <Link
                  href={"/"}
                  className="flex items-center gap-2 text-black-base hover:text-black-muted duration-200"
                >
                  <FaRegHeart className="text-lg" />
                  <span className="text-sm font-medium">Add to wishlist</span>
                </Link>
              </div>
              <div className="pb-4 border-t border-gray-400">
                <div className="text-black-muted text-sm pt-3 pb-4  space-y-3">
                  <h1>
                    <span className="text-black-base  font-semibold">
                      Categories:
                    </span>{" "}
                    Honey, Mix Food, Organic Food
                  </h1>
                  <h1>
                    <span className="text-black-base font-semibold">Tags:</span>{" "}
                    Falaq Food, honey nuts, মধুময় বাদাম
                  </h1>
                  <div className="flex items-center gap-1">
                    <span className="text-black-base font-semibold">
                      Share:
                    </span>{" "}
                    <div className="flex items-center gap-2">
                      <Link
                        href={"/"}
                        className="text-black-muted hover:text-black-base duration-300"
                      >
                        <FaFacebookF className="text-sm" />
                      </Link>

                      <Link
                        href={"/"}
                        className="text-black-muted hover:text-black-base duration-300"
                      >
                        <FaXTwitter className="text-sm" />
                      </Link>
                      <Link
                        href={"/"}
                        className="text-black-muted hover:text-black-base duration-300"
                      >
                        <IoLogoYoutube className="text-sm" />
                      </Link>
                      <Link
                        href={"/"}
                        className="text-black-muted hover:text-black-base duration-300"
                      >
                        <FaLinkedinIn className="text-sm" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* product details  and review  */}
      <ProductDetailsAndReview />
      <RelatedProducts />
    </>
  );
}
