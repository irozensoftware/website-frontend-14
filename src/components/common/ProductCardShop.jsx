"use client";
import { addToCart } from "@/redux/features/cartSlice";
import { toggleShopCardDrawer } from "@/redux/features/toggleSlice";
import { addToWishlit } from "@/redux/features/wishlistSlice";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";
import { FaRegHeart } from "react-icons/fa";
import { FiShoppingCart } from "react-icons/fi";
import { IoSearchOutline } from "react-icons/io5";
import { useDispatch } from "react-redux";

const ProductCardShop = ({ product, isActive, onHover, onLeave }) => {
  const router = useRouter();
  const dispatch = useDispatch();
  const handleAddToCard = (product) => {
    if (product?.has_variant == 1) {
      router.push(`/product/${product?.slug}`);
    } else {
      dispatch(addToCart(product));
      dispatch(toggleShopCardDrawer());
    }
  };

  const handleWishlist = () => {
    e.preventDefault();
    e.stopPropagation();
    dispatch(addToWishlit(product));
  };

  return (
    <div
      onMouseEnter={onHover} // Call parent hover handler
      onMouseLeave={onLeave}
      className={`border  ${
        isActive ? "scale-y-105 pb-5" : ""
      } border-[#00000013] p-1 sm:p-2 lg:p-3  transition-transform transform shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]`}
    >
      <Link href={`/product/${product?.slug}`}>
        <div className="max-h-62.5 group relative overflow-hidden">
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
          <div
            className="absolute inset-0 flex items-center justify-center gap-3 
      opacity-0 group-hover:opacity-100  z-10 transition-opacity duration-300"
          >
            {/* Wishlist */}
            <button
              onClick={handleWishlist}
              className="bg-white cursor-pointer p-3 rounded-full shadow hover:scale-105 transition"
              title="Add to Wishlist"
            >
              <span className="text-black text-lg">
                <FaRegHeart />
              </span>
            </button>

            {/* Quick View */}
            <button
              className="bg-white p-3 cursor-pointer rounded-full shadow hover:scale-105 transition"
              title="Quick View"
            >
              <span className="text-black text-lg">
                {" "}
                <IoSearchOutline />
              </span>
            </button>
          </div>
        </div>
        {/* Hover Buttons */}
      </Link>
      {/* Product Title */}
      <Link href={`/product/${product?.slug}`}>
        <h3 className="text-sm overflow-hidden font-semibold hover:text-black-muted duration-300 cursor-pointer mt-3">
          {product?.name}
        </h3>
      </Link>
      <Link
        href={`/product-category/${product?.category?.slug}`}
        className="text-sm text-center block text-black-muted font-medium"
      >
        {product?.category?.name}
      </Link>

      {/* Price */}
      <div className="mt-2 flex items-center gap-2">
        <p className="text-base text-primary-base font-medium">
          ${product?.base_price}
        </p>
      </div>

      {/* Action Buttons */}
      <div className={`flex flex-col space-y-2 mt-1`}>
        <button
          onClick={() => handleAddToCard(product)}
          className="bg-primary-base cursor-pointer group relative overflow-hidden flex justify-center items-center text-sm font-bold text-white px-4 py-2 duration-200"
        >
          <span className="group-hover:hidden">ADD TO CART</span>
          <FiShoppingCart className="text-[20px] group-hover:block hidden duration-200" />
        </button>
      </div>
    </div>
  );
};

export default ProductCardShop;
