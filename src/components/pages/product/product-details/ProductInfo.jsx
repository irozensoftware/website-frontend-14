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

export default function ProductInfo({ product,relatedProduct }) {
  const [value, setValue] = useState(1);
  const increment = () => setValue((prev) => prev + 1);
  const decrement = () => setValue((prev) => (prev > 1 ? prev - 1 : 1));
  const mapping_variants = product?.mapping_variants || [];

const groupedArray = Object.values(
  mapping_variants.reduce((acc, item) => {
    const variantId = item.variant.id;

    if (!acc[variantId]) {
      acc[variantId] = {
        variant_id: variantId,
        attributes: []
      };
    }

    acc[variantId].attributes.push({
      id: item.attribute.id,
      name: item.attribute.name
    });

    return acc;
  }, {})
);

  return (
    <>
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Image Section */}
          <div>
            <ProductDetailsImageSection
              imagesData={product?.images?.map((item) => item?.image)}
            />
          </div>

          {/* Product Details */}
          <div>
            <ProductHeader product={product} />
            <div className="pt-5">
              <h1 className=" text-base md:text-lg xl:text-xl 2xl:text-2xl font-medium mb-4">
                {product?.name}
              </h1>

              <div className="flex items-center gap-3 py-2">
                <p className="text-base md:text-xl text-primary-base  font-bold">
                  ${product?.base_price}
                </p>
              </div>
              <div className="space-y-3 pb-5">
                 {
                  groupedArray?.map((variant,index) => <div key={index}>
                    <div className="flex items-center gap-3">
                      {variant?.attributes.map((attr,index) => (
                        <button
                          key={index}
                          className="border border-gray-400 px-3 py-1 text-sm hover:border-primary-base hover:text-primary-base cursor-pointer transition-all duration-300"
                        >
                          {attr?.name}
                        </button>
                      ))}
                    </div>
                  </div>)
                 }
              </div>
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
                    <span className="text-black-base  font-semibold">SKU:</span>{" "}
                    {product?.sku}
                  </h1>
                  <h1>
                    <span className="text-black-base  font-semibold">
                      Categories:
                    </span>{" "}
                    {product?.category?.name}
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
      <ProductDetailsAndReview product={product} />
      <RelatedProducts relatedProduct={relatedProduct} />
    </>
  );
}
