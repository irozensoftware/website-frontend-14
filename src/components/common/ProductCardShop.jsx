"use client";
import { addToCart } from "@/redux/features/cartSlice";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FiShoppingCart } from "react-icons/fi";
import { useDispatch } from "react-redux";

const ProductCardShop = ({ product, isActive, onHover, onLeave }) => {
  const dispatch = useDispatch();
  const handleAddToCard = (product) => {
    dispatch(addToCart(product));
  };
  console.log("productCardShop", product?.main_two_images[1]?.image);
  return (
    <div
      onMouseEnter={onHover} // Call parent hover handler
      onMouseLeave={onLeave}
      className={`border  ${
        isActive ? "scale-y-105 pb-5" : ""
      } border-[#00000013] p-1 sm:p-2 lg:p-3  transition-transform transform shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]`}
    >
      <Link href={`/product/${product?.slug}`}>
        <div className="max-h-62.5 relative overflow-hidden">
        
          {/* Product Image */}
          <Image
            width={250}
            height={250}
            src={
              product.main_two_images?.length
                ? `${process.env.NEXT_PUBLIC_API_URL}/storage/` +
                  (isActive && product?.main_two_images[1]?.image
                    ? product.main_two_images[1].image
                    : product.main_two_images[0].image)
                : "/placeholder.png"
            }
            alt={product?.name}
            className={`w-full h-62.5 cursor-pointer object-fill transition-opacity duration-500 `}
          />
        </div>
      </Link>
      {/* Product Title */}
      <Link href={`/product/${product?.slug}`}>
        <h3 className="text-sm overflow-hidden font-semibold hover:text-black-muted duration-300 cursor-pointer mt-3">
          {product?.name}
        </h3>
      </Link>

      {/* Price */}
      <div className="mt-2 flex items-center gap-2">
        <p className="text-base text-primary-base font-medium">
         $ {product?.base_price}
        </p>
      </div>

      {/* Action Buttons */}
      <div className={`flex flex-col space-y-2 mt-1`}>
        <button
          onClick={() => handleAddToCard(product)}
          className="bg-primary-base group relative overflow-hidden flex justify-center items-center text-sm font-bold text-white px-4 py-2 duration-200"
        >
          <span className="group-hover:hidden">ADD TO CART</span>
          <FiShoppingCart className="text-[20px] group-hover:block hidden duration-200" />
        </button>
      </div>
    </div>
  );
};

export default ProductCardShop;
