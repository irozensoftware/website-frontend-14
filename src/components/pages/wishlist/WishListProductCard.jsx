"use client";
import { addToCart } from "@/redux/features/cartSlice";
import { toggleShopCardDrawer } from "@/redux/features/toggleSlice";
import { removeFromWishlitCart } from "@/redux/features/wishlistSlice";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";
import { FiShoppingCart } from "react-icons/fi";
import { IoMdClose } from "react-icons/io";
import { useDispatch } from "react-redux";

const WishListProductCard = ({ product, isActive, onHover, onLeave }) => {
  const router = useRouter();
  const dispatch = useDispatch();
  const handleAddToCard = (product) => {
    if (product?.has_variant == 1) {
      router.push(`/product/${product?.slug}`);
    } else {
      dispatch(addToCart(product));
      dispatch(toggleShopCardDrawer())
    }
  };
   const handleRemoveWishlist = (product) => {
    dispatch(removeFromWishlitCart(product))
   
  };

  return (
    <div
      onMouseEnter={onHover} // Call parent hover handler
      onMouseLeave={onLeave}
      className={`transition-transform border border-gray-200 p-1 transform `}
    >
      <div>
        <div onClick={()=>handleRemoveWishlist(product)} className="flex pb-1 cursor-pointer  max-w-20 hover:opacity-60 duration-300 items-center gap-1 ">
          <IoMdClose className="text-lg" />
          <span className="text-sm font-medium">Remove</span>
        </div>
        <Link
          href={`/product/${product?.slug}`}
          className="max-h-62.5 relative overflow-hidden"
        >
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
            className={`w-full h-40 md:h-62.5 cursor-pointer object-fill transition-opacity duration-500 `}
          />
        </Link>
      </div>
      {/* Product Title */}
      <Link href={`/product/${product?.slug}`}>
        <h3 className="text-sm overflow-hidden text-center font-semibold hover:text-black-muted duration-300 cursor-pointer mt-3">
          {product?.name}
        </h3>
      </Link>

      <Link  href={`/product-category/${product?.category?.slug}`} className="text-sm text-center block text-black-muted font-medium">
          {product?.category?.name}
        </Link>

      {/* Price */}
      <div className="mt-2 gap-2 text-center">
        <p className="text-base text-primary-base font-medium">
          ${product?.base_price}
        </p>
      </div>

      {/* Action Buttons */}
      <div className={`flex flex-col space-y-2 mt-1`}>
        <button
          onClick={() => handleAddToCard(product)}
          className="bg-primary-base group cursor-pointer relative overflow-hidden flex justify-center items-center text-sm font-bold text-white px-4 py-2 duration-200"
        >
          <span className="group-hover:hidden">ADD TO CART</span>
          <FiShoppingCart className="text-[20px] group-hover:block hidden duration-200" />
        </button>
      </div>
    </div>
  );
};

export default WishListProductCard;
