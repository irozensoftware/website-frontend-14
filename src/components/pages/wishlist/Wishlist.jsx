"use client";
import ProductCard from "@/components/common/ProductCard";
import ProductCardShop from "@/components/common/ProductCardShop";
import SecondBlogCard from "@/components/common/SecondBlogCard";
import Link from "next/link";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import WishlistEmpty from "./WishlistEmpty";
import WishListProductCard from "./WishListProductCard";

const Wishlist = () => {
  const { wish_products } = useSelector((status) => status.wishlist);
  const [activeIndex, setActiveIndex] = useState(null);
  console.log(wish_products, "wish_products");
  return (
    <div>
      <div className="bg-black py-10 text-white space-y-3 px-2 text-center">
        <h1 className="text-xl md:text-3xl xl:text-5xl font-bold">Wishlit</h1>
        <div className="flex justify-center gap-2">
          <Link href={"/"} className="text-gray-300">
            Home
          </Link>{" "}
          /<p className="font-bold">Wishlit</p>
        </div>
      </div>
      <div className="container py-10">
        {wish_products?.length > 0 ? (
          <>
            <h1  className="text-base md:text-xl uppercase font-semibold">Your products wishlist</h1>
            <div
              className={`grid mt-5 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4`}
            >
              {wish_products?.map((product, index) => (
                <WishListProductCard
                  key={product?.id || index}
                  product={product}
                  isActive={activeIndex === index} // Pass active state
                  onHover={() => setActiveIndex(index)}
                  onLeave={() => setActiveIndex(null)}
                />
              ))}
            </div>
          </>
        ) : (
          <WishlistEmpty/>
        )}
      </div>
    </div>
  );
};

export default Wishlist;
